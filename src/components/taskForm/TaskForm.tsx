import {
  React,
  UseState,
  ChageEvent,
  FormEvent,
  useEffect,
  useState,
  ChangeEvent,
} from "react";

import Props from "../../interfaces/IProps";
import { ITask } from "../../interfaces/ITask";
import styles from "./TaskForm.module.css";

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = {id, title, description};

    setTaskList!([...taskList, newTask])
    setTitle("");
    setDescription("");
    console.log(taskList);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : setDescription(e.target.value);
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
            value={title}
          />
        </div>
        <div>
          <label htmlFor="description">Dificuldade</label>
          <input
            type="text"
            name="description"
            placeholder="Descrição"
            onChange={handleChange}
            value={description}
          />
        </div>
        <input type="submit" value={btnText} />
      </form>
    </>
  );
};

export default TaskForm;
