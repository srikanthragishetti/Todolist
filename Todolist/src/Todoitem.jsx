import React from 'react'

const Todoitem = (props) => {
    const {todo ,handleDelete}=props
  return (
    <>
    {todo.map(function(element,index){
            return <li key={element.id}>  {element}</li>
        })}
        {<button>Edit</button>}
        {<button onClick={()=>handleDelete(element.id)}>Delete</button>}
    </>
  )
}

export default Todoitem
