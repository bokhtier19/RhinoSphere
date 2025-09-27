const API_URL = "http://localhost:5000";

export async function fetchFromAPI(
  endpoint: string,
  method: string = "GET",
  body?: any,
  token?: string
) {
  const authToken = token || (typeof window !== "undefined" ? localStorage.getItem("token") : null);

  const res = await fetch(`${API_URL}/${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }

  return res.json();
}
