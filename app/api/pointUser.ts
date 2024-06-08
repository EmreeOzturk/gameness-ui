export interface CheckPointResponse {
  createUser?: boolean;
  error?: string;
}

export async function pointUser(
  userID: string,
  taskID: string
): Promise<CheckPointResponse> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/pointUser",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({ userID, taskID }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: CheckPointResponse = await response.json();
  return data;
}
