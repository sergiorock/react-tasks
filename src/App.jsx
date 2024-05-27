import TaskForm from './assets/components/TaskForm'
import TaskList from './assets/components/TaskList'

const App = () => {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  )
}

export default App
