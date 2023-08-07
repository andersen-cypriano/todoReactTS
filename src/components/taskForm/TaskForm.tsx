import {
  FormEvent,
  useState,
  ChangeEvent,
} from "react";

import Props from "../../interfaces/IProps";
import { ITask } from "../../interfaces/ITask";
import styles from "./TaskForm.module.css";

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  // const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = {id, title, description};

    setTaskList!([...taskList, newTask]);

    // Reset inputs
    setTitle("");
    setDescription("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : setDescription(e.target.value);
      : setDescription(e.target.value);
  };

  return (
    <>
      <h3>Adicione uma tarefa</h3>
      <form onSubmit={addTaskHandle} className={styles.form}>
        <div>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            placeholder="Insira o título da tarefa"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
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
