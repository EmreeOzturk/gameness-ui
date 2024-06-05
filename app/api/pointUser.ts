export interface CheckPointResponse {
  createUser?: boolean;
  error?: string;
}

export async function pointUser(
  userID: string,
  taskID: string
): Promise<CheckPointResponse> {
  console.log("pointUser", userID, taskID);
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/pointUser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
