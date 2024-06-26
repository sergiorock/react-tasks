import { useState, useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

const TaskForm = () => {
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { addTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    addTask(title, description)

    setTitle('')
    setDescription('')
  }

  return (    
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
      <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
      <input name="title" type="text" placeholder="Escribe una tarea" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus className='bg-slate-300 p-3 w-full mb-2'/>
      <br />
      <br />
      <textarea name="description" placeholder="Escribe una descripción" onChange={(e) => setDescription(e.target.value)} value={description} className='bg-slate-300 p-3 w-full mb-2'/>

      <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm