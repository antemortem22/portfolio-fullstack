type RequestOptions = RequestInit;

export class ApiError extends Error {
  readonly status: number;
  readonly url: string;

  constructor(message: string, status: number, url: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.url = url;
  }
}

function getApiBaseUrl() {
  const apiBaseUrl = process.env.API_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error("Missing API_BASE_URL environment variable.");
  }

  return apiBaseUrl.replace(/\/+$/, "");
}

export async function apiFetch<T>(path: string, options: RequestOptions = {}) {
  const { headers, ...restOptions } = options;
  const url = `${getApiBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;

  const response = await fetch(url, {
    ...restOptions,
    headers: {
      Accept: "application/json",
      ...headers,
    },
  });

  if (!response.ok) {
    let responseBody = "";

    try {
      responseBody = await response.text();
    } catch {
      responseBody = "";
    }

    const responseSuffix = responseBody
      ? ` Response: ${responseBody.slice(0, 300)}`
      : "";
    const message = `API request failed with status ${response.status} ${response.statusText} for ${url}.${responseSuffix}`;
    throw new ApiError(message, response.status, url);
  }

  return (await response.json()) as T;
}
