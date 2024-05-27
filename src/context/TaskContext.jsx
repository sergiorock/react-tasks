import {createContext, useState, useEffect} from 'react'
import { Tasks as data } from '../assets/data/Tasks'

const TaskContext = createContext()

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  const addTask = (title, description) => {

    const task = {
      id: tasks.length + 1,
      title,
      description
    }

    setTasks([...tasks, task])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskContextProvider }