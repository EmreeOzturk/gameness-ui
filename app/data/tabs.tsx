import Epoch from "../components/tabs/Epoch";
import {
  week1DailyTasks,
  week1WeeklyTasks,
  week2DailyTasks,
  week2WeeklyTasks,
  week3DailyTasks,
  week3WeeklyTasks,
  week4DailyTasks,
  week4WeeklyTasks,
} from "@/app/data/missions";
export const tabs = [
  {
    title: "1. Epoch",
    value: "epoch1",
    content: (
      <Epoch
        title="Epoch 1"
        description="Epoch 1 Description"
        points={100}
        dailyTasks={week1DailyTasks}
        weeklyTasks={week1WeeklyTasks}
      />
    ),
  },
  {
    title: "2. Epoch",
    value: "epoch2",
    content: (
      <Epoch
        title="Epoch 2"
        description="Epoch 2 Description"
        points={200}
        dailyTasks={week2DailyTasks}
        weeklyTasks={week2WeeklyTasks}
      />
    ),
  },
  {
    title: "3. Epoch",
    value: "epoch3",
    content: (
      <Epoch
        title="Epoch 3"
        description="Epoch 3 Description"
        points={300}
        dailyTasks={week3DailyTasks}
        weeklyTasks={week3WeeklyTasks}
      />
    ),
    // disabled: true,
  },
  {
    title: "4. Epoch",
    value: "epoch4",
    content: (
      <Epoch
        title="Epoch 4"
        description="Epoch 4 Description"
        points={400}
        dailyTasks={week4DailyTasks}
        weeklyTasks={week4WeeklyTasks}
      />
    ),
    // disabled: true,
  },
];
