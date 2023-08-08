import { useState } from "react";
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import styles from "./App.module.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import {ITask} from "./interfaces/ITask";


function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const deleteTask = (id: number) => {
    setTaskList (
      taskList.filter(task => {
        return task.id !== id
      })
    );
  };
  return (
    <>  
      <Header/>
      <div className={styles.main}>
        <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        <TaskList taskList={taskList} handleDelete={deleteTask}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
