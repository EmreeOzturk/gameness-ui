import connectMongo from "@/app/lib/connectMongo";
import Task from "@/app/models/TaskModel";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await connectMongo();
    const tasks = await Task.find({});
    console.log(tasks);
    return NextResponse.json({ data: tasks });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
