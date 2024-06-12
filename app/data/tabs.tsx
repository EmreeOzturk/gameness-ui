import Epoch from "../components/tabs/Epoch";


export const tabs = [
  {
    title: "1. Epoch",
    value: "epoch1",
    content: (
      <Epoch
        title="Epoch 1"
        value="epoch1"
        description="Epoch 1 Description"
      />
    ),
  },
  {
    title: "2. Epoch",
    value: "epoch2",
    content: (
      <Epoch
        title="Epoch 2"
        value="epoch2"
        description="Epoch 2 Description"
      />
    ),
    // disabled: true,
  },
  {
    title: "3. Epoch",
    value: "epoch3",
    content: (
      <Epoch
        title="Epoch 3"
        value="epoch3"
        description="Epoch 3 Description"
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
        value="epoch4"
        description="Epoch 4 Description"
      />
    ),
    // disabled: true,
  },
];
