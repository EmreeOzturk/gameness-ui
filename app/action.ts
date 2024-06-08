"use server";
import Task from "@/app/models/TaskModel";
import { revalidatePath } from "next/cache";
import connectMongo from "@/app/lib/connectMongo";
import { signIn } from "@/auth";
import { auth } from "@/auth";
import { TaskSchema } from "./data/missions";
export default async function signWithX() {
  await signIn("twitter", { redirectTo: "/missions" });
}

export async function pointUser(form: FormData) {
  const userID = form.get("userId");
  const taskID = form.get("_id");
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
  if (data) {
    console.log(data);
    revalidatePath("/missions");
  }
  return data;
}

export async function getTasks(value: string) {
  try {
    await connectMongo();
    const res = await Task.find({ epoch: value });
    const tasks = res.map((task) => {
      return {
        _id: task._id.toString(),
        mission_title: task.mission_title,
        mission_description: task.mission_description,
        mission_point: task.mission_point,
        mission_type: task.mission_type,
        weekly: task.weekly,
        mission_joiners: task.mission_joiners,
        mission_link: task.mission_link,
        mobile_mission_link: task.mobile_mission_link,
      } as TaskSchema;
    });
    // console.log(tasks);
    return tasks;
  } catch (error) {
    return { error };
  }
}
