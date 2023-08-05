import {
  React,
  UseState,
  ChageEvent,
  FormEvent,
  useEffect,
  useState,
  ChangeEvent,
} from "react";

import Props from "../../interfaces/IBtnProps";
import { ITask } from "../../interfaces/ITask";
import styles from "./TaskForm.module.css";

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficult] = useState<number>(0);

  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = {id, title, difficulty};

    setTaskList!([...taskList, newTask])
    setTitle("");
    setDifficult(0);
    console.log(taskList)
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : setDifficult(parseInt(e.target.value));
  };

  return (
    <>
      <h3>Adicione uma tarefa</h3>
      <form onSubmit={addTaskHandle} className={styles.form}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Título da tarefa"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="difficulty">Dificuldade</label>
          <input
            type="text"
            name="difficulty"
            placeholder="Dificuldade da tarefa"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value={btnText} />
      </form>
    </>
  );
};

export default TaskForm;
