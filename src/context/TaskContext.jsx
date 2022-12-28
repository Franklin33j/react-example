import {createContext,useState,useEffect} from 'react'
import { tasks as data } from "../data/tasks";

//componente con funcionalidades
export const TaskContext= createContext()
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task)
    {
      //los tres puntos sirven para copiar los elementos del array mas los elementos nuevos
      setTasks([...tasks,{
        title:task.title,
        id:tasks.length,
        description:task.descripcion
      }])
    }

    
  function deleteTask(taskId){
    console.log(taskId)
    setTasks(tasks.filter((task)=>
      task.id !== taskId
    ))


  }
  useEffect(() => {
    setTasks(data);
  }, [])



  return (
   <TaskContext.Provider value={{
    tasks:tasks,
    deleteTask:deleteTask,
    createTask:createTask
   }}>
    {props.children}
   </TaskContext.Provider>
  )
}

export default TaskContext