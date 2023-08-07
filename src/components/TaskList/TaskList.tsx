import { ITask } from "../../interfaces/ITask";

interface Props {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
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
    </div>
  )
}

export default TaskList;