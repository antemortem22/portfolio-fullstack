export async function POST() {
  return Response.json(
    {
      message: "Contact messaging is currently unavailable.",
    },
    { status: 410 },
  );
}
