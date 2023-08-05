import React from "react";
import { ITask } from "./ITask";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default Props;