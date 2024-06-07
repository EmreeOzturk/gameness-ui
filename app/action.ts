"use server";
import Task from "@/app/models/TaskModel";
import { revalidatePath } from "next/cache";
import connectMongo from "@/app/lib/connectMongo";
import { signIn } from "@/auth";
import { auth } from "@/auth";
export default async function signWithX() {
  await signIn("twitter", { redirectTo: "/missions" });
}

export async function getTasks() {
  try {
    await connectMongo();
    const tasks = await Task.find({});
    console.log(tasks);
    return tasks;
  } catch (error) {
    return { error };
  }
}
export async function pointUser(userID: string, taskID: string) {
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

  const data = await response.json();
  console.log(data);
  revalidatePath("/missions");
  return data;
}
