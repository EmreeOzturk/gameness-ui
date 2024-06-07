import { model, models, Schema } from "mongoose";
import { TaskSchema } from "../data/missions";

const TaskModel = new Schema<TaskSchema>(
  {
    _id: Schema.Types.ObjectId,
    mission_title: {
      type: String,
      required: true,
    },
    mission_description: {
      type: String,
      required: true,
    },
    mission_point: {
      type: Number,
      required: true,
    },
    mission_type: {
      type: String,
      required: true,
    },
    weekly: {
      type: Boolean,
    },
    mission_joiners: {
      type: Array,
    },
    mission_link: {
      type: String,
    },
    mobile_mission_link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Task = models.dats_task || model("dats_task", TaskModel,"task");
export default Task;
