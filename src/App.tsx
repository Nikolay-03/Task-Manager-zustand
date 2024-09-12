import './App.scss'
import TaskList from "./components/TaskList/TaskList.tsx";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
function App() {
  return (
      <div className='app'>
          <h1>Task List</h1>
          <AddTaskForm/>
          <TaskList/>
      </div>
  )
}

export default App
