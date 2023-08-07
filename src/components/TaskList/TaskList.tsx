import { ITask } from "../../interfaces/ITask";
<<<<<<< HEAD
import  styles  from "./TaskList.module.css";
=======

>>>>>>> 68edf6b1897ee9b47d664c5ad7a07c3981703e2c
interface Props {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
<<<<<<< HEAD
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
              </li>
            </ul>
          ))
        ) : (
          <p className={styles.noItem}>Sem tarefas <b>:(</b></p>
        )}
=======
    <div className="taskList-content">
      <ul>
        {taskList.length > 0 ? (
          taskList.map(task => (
            <li key={task.id}>
              <h1 className="title">{task.title}</h1>
              <p className="">{task.description}</p>
            </li>
          ))
        ) : (
          <p>Sem tarefas</p>
        )}
      </ul>
>>>>>>> 68edf6b1897ee9b47d664c5ad7a07c3981703e2c
    </div>
  )
}

export default TaskList;