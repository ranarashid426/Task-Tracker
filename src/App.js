import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import './index.css'
import { useState,useEffect } from "react";



function App() {

  
useEffect(() => {
  
  const getTasks = async ()=>{
    const tasks = await fetchTasks()
    setTasks([...tasks])
  }
  

  getTasks()
}, [])

const fetchTasks = async (id)=>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}

const fetchTask = async (id)=>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}
  const [tasks,setTasks] = useState([])

  const [showAdd, setShowAdd] = useState(false)


const deleteTask = async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,
  {
    method:'DELETE'
  }
  )
  // const data = await res.json()
  
  setTasks(tasks.filter((task)=>
  task.id!==id))
}

// Add TAsk
const addTask = async (task)=>{

  const res =await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(task)
  })

  const data = await res.json()
  
  setTasks([data,...tasks])
}

const toggleReminder = async (id)=>{
  const tasktoToggle  = await fetchTask(id)
  const updatedTask = {...tasktoToggle,reminder:!tasktoToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`,
  {
    method:'PUT',
    headers:{
      'Content-type':'application/json',
    },
    body: JSON.stringify(updatedTask)
  }  )
  const data = await res.json()
  // console.log(data)
  setTasks(tasks.map((task)=>task.id===id ?
  {...task,reminder:data.reminder}:task))
}



  return (
  
  <div className="container">
    <Header showAdd = {()=>{setShowAdd(!showAdd)}}  showAddBtn = {showAdd}/>
    {showAdd && <AddTask addTask={addTask}/>}
    {tasks.length!==0 ? < Tasks  tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> :
    
    <p>No Task Available</p>}
  </div>

  )
}

export default App;


// {
//   "tasks": [
//     {
//       "id":1,
//       "text":"Take Coffe",
//       "date":"Monday, 9 November. 2023",
//       "reminder":true
//     },
//     {
//       "id":2,
//       "text":"Take Shower",
//       "date":"Monday, 9 November. 2023",
//       "reminder":true
//     },
//     {
//       "id":3,
//       "text":"Take Nothing",
//       "date":"Monday, 9 November. 2023",
//       "reminder":true
//     }

//   ]
// }