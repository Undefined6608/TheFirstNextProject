type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

interface FetcherOptions<T> {
  method: HttpMethods;
  body?: T;
  headers?: Record<string, string>;
}

const httpRequest = async <T, R>(
  url: string,
  options: FetcherOptions<T>,
): Promise<R> => {
  const response = await fetch(url, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
};

export default httpRequest;
