const API_URL = "http://localhost:5000";

export async function fetchFromAPI(endpoint: string, method: string = "GET", body?: any, token?: string) {
    const res = await fetch(`${API_URL}/${endpoint}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    return res.json();
}
