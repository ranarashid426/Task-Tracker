import { useState } from "react"


const AddTask = ({addTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitForm = (e)=>{
        e.preventDefault()
        if(!text){
            alert('Please enter a text')
            return
        }

        addTask({text,day,reminder})
        
        setText('')
        setDay('')
        setReminder(false)
        
    }
    
  return (
    <form className='add-form' onSubmit={submitForm}>
        <div className='form-control'>
            <label >Task</label>
            <input  type="text"  value={text} placeholder='Add Task'  
            onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
        <label >Date & Time</label>
        <input  type="text" value={day} placeholder='Add Date & Time' 
        onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
        <label >Reminder</label>
        <input  type="checkbox" checked ={reminder}
        value={reminder}
        onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" className='btn btn-block' value="Save Task" />


    </form>
  )
}

export default AddTask