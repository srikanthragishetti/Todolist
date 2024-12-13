import React  from 'react'
import { useState } from 'react'
import Todoitem from './Todoitem'

const Todolist = () => {
    const [text,setText]= useState("")
    const [todo,setTodo]= useState([])

    const handleChange=(event)=>{
      setText(event.target.value)
    }
    const handleSubmit=()=>{
      
        setTodo([...todo,text])
        setText("")
      }
    const handleDelete=(id)=>{
        const todoAfterDeletion = todo.filter(function(element,index){
            return element.id !== id
        });
        setTodo(todoAfterDeletion)
    }  

  return (
    <div>
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleSubmit}>submit</button>
      <ol>
        <Todoitem todo={todo} handleDelete={handleDelete}/>
      </ol>
    </div>
  )
}

export default Todolist
