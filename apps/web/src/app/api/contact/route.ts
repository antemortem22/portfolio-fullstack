import { appendFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const subject = payload.subject?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return Response.json({ message: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ message: "Invalid email address." }, { status: 400 });
  }

  const storageDirectory = join(tmpdir(), "portfolio-contact");
  const storagePath = join(storageDirectory, "messages.jsonl");

  const record = {
    id: crypto.randomUUID(),
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent"),
  };

  await mkdir(storageDirectory, { recursive: true });
  await appendFile(storagePath, `${JSON.stringify(record)}\n`, "utf8");

  return Response.json({ ok: true, id: record.id }, { status: 201 });
}
