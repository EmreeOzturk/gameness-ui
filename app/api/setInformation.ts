export interface CheckInformationResponse {
  ref?: boolean;
  error?: string;
}

export async function setInformation(
  userID: string,
  taskID: string,
  info: string
): Promise<CheckInformationResponse> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/setInfo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, taskID, info }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: CheckInformationResponse = await response.json();
  return data;
}
