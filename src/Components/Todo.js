import React from 'react'
import { useState } from 'react'

const Todo = () => {
  const [userInput, setUserInput] = useState('')
  const[todos,setTodos]=useState([])


// To add todos
  const addTodos = ()=>{
      if(!userInput){

      }else {
        setTodos([...todos,userInput])
        setUserInput('')
      }
  }

  // to Delete Todos
  const deleteTodo=(id)=>{
    console.log(id)
    let deletedTodos = todos.filter((todo,index)=>{
      return index!==id;
    })
    setTodos(deletedTodos)
  }

  // To Delte All todos
  const deleteAll=()=>{
    setTodos([])
  }
  

    return (
        <>
           {/* input field */}
           <input 
              type='text' 
              value={userInput} 
              onChange={(e)=>setUserInput(e.target.value)}
              placeholder='Add Item...'/>
           <i class="fas fa-plus-circle" title='Add Item' onClick={addTodos}></i>
        

        <div className='show_todos'>
          {
            todos.map((todo,index)=>{
              return(
                  <div className='each_todo'>
                    <h3>{todo}</h3>
                    <i class="fas fa-trash-alt" title='Delete task' onClick={()=>deleteTodo(index)}></i>
            </div>
            )
          })}
        </div>
      <button onClick={deleteAll}> Clear All</button>
      </>



    )
}

export default Todo
