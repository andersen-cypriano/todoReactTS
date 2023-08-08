import { ITask } from "../../interfaces/ITask";
import  styles  from "./TaskList.module.css";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
}

const TaskList = ({taskList, handleDelete}: Props) => {
  return (
    <div className={styles.taskListContent}>
      <h1>Lista de Tarefas</h1>
      {taskList.length > 0 ? (
          taskList.map(task => (
            <ul>
              <li key={task.id}>
                <div className={styles.contentInfo}>
                  <h1 className="title">{task.title}</h1>
                  <p className="">{task.description}</p>
                </div>
                <div className={styles.contentIcon}>
                  <i className="bi bi-pencil"></i>
                  <i className="bi bi-trash" onClick={()=>{handleDelete(task.id)}}></i>
                </div>
              </li>
            </ul>
          ))
        ) : (
          <p className={styles.noItem}>Sem tarefas <b>:(</b></p>
        )}
    </div>
  )
}

export default TaskList;