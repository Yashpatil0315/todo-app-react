"use client"

import React, { useState } from 'react'
import '@/app/globals.css';




const Todo = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {

    if (!input == ""){
      setTodos([...todos, input]);
      console.log(todos);
    } else {
      alert("Task can not be empty")
    }


  }



  return (
    <>
      <div className='w-full max-w-md bg-white rounded-2xl p-4 max-h-[80vh] overflow-y-auto shadow-lg scrollbar-none'>
        <h1 className='m-5 mb-1.5 p-1 text-2xl'>Todo List</h1>
        <hr className='m-2.5'></hr>
        <div className='flex flex-row justify-center items-center'>
          <input className='w-3/4 border-2 border-black ml-2.5 p-2.5 max-h-32 rounded-2xl' placeholder='Write your task here...' value={input} onChange={(e) => { setInput(e.target.value) }}></input>
          <button className='h-12 pl-4.5 pr-4.5 bg-white text-black rounded-2xl w-19 ml-3.5 border-2  border-black' onClick={handleAdd}> Add</button>
        </div>
        <div className='flex flex-col items-center mt-5'>
          {todos.map((todo, index) => {
            return (
              <span className='flex flex-row justify-between items-center border-2 border-black m-2 w-11/12 h-15 text-3xl text-center p-2.5 rounded-2xl ' key={index}>{index+1}. {todo} <span className="material-symbols-outlined cursor-pointer" onClick={() => {const updatedTodos = todos.filter((_, i) => i !== index);
          setTodos(updatedTodos);
              }}>close
</span></span>
            )
          })}
        </div>


      </div>

    </>
  )
}

export default Todo
