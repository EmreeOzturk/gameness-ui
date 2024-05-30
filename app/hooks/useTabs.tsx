import { useMemo } from "react";

const useTabs = () => {
  const tabs = useMemo(
    () => [
      {
        title: "1. Epoach",
        value: "epoach",
        content: <div>1</div>,
      },
      {
        title: "2. Epoach",
        value: "epoach",
        content: <div>2</div>,
      },
      {
        title: "3. Epoach",
        value: "epoach",
        content: <div>3</div>,
      },
      {
        title: "4. Epoach",
        value: "epoach",
        content: <div>4</div>,
      },
    ],
    []
  );

  return tabs;
};

export default useTabs;
