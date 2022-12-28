import TaskCard from './TaskCard'
import TaskContext from '../context/TaskContext';
import { useContext } from 'react';
function TaskList() {
  const {tasks}=useContext(TaskContext)
  console.log(tasks)
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }

  return (
    < div className="grid grid-cols-4 gap-2  ">
      {tasks.map((task) => (
      <TaskCard task={task} key={task.id} ></TaskCard>
      ))}
    </div>
  )
}

export default TaskList;
