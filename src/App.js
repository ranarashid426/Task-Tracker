import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import './index.css'
import { useState,useEffect } from "react";
import {BrowserRouter, Route,Routes} from 'react-router-dom'

const api = "http://localhost:5000/tasks"

function App() {

  
useEffect(() => {
  
  const  getTasks  = async ()=>{
  const tasks = await fetchTasks()
    setTasks([...tasks])
  }
  

  getTasks()
}, [])

const fetchTasks = async (id)=>{
  const res = await fetch(api)
  const data = await res.json()
  return data
}

const fetchTask = async (id)=>{
  const res = await fetch(`${api}/${id}`)
  const data = await res.json()
  return data
}
  const [tasks,setTasks] = useState([])

  const [showAdd, setShowAdd] = useState(false)


const deleteTask = async (id)=>{
  await fetch(`${api}/${id}`,
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

  const res =await fetch(api,{
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
  const res = await fetch(`${api}/${id}`,
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
  <BrowserRouter>
  <div className="container">
      <Header showAdd = {()=>{setShowAdd(!showAdd)}}  showAddBtn = {showAdd}/>
    <Routes>
      <Route path="/" 
      element = {<>
      {showAdd && <AddTask addTask={addTask}/>}
      {tasks.length!==0 ? < Tasks  tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> :
      
      <p>No Task Available</p>} 
      
      </>
    }
    />

      {/* 2nd route */}

      <Route path={'/about'} element = {<About/>}/>
    </Routes>
    <Footer />
 
  </div>
  </BrowserRouter>
 

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