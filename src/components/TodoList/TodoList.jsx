import React, { useState, useEffect } from 'react'
import TodoListItem from './TodoListItem/TodoListItem';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'

const TodoList = () => {
  
  const list = [
    {title: "Wake up", id: uuidv4()},
    {title: "Breakfast", id: uuidv4()},
    {title: "Take a shower", id: uuidv4()}
  ]

  const [newTodo, setNewTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [inputTimeout, setInputTimeout] = useState("")
  const [responseTimeout, setResponseTimeout] = useState("")
  const [responseMessage, setResponseMessage] = useState("")

  useEffect(() => {
  return console.log("Lista actualizada!");
  }, [todoList]);

  useEffect(() => {
    setTodoList(list)
    }, []);

  const deleteItem = (id) => {
    confirm("Are you sure you want to delete this item?")?setTodoList(todoList.filter((listItem) => listItem.id !== id)):console.log("Operation cancelled by user");
  }

  const handleChange = (e) => {
    setNewTodo(e.target.value)

    clearTimeout(inputTimeout)
    setInputTimeout(setTimeout(() => {
      setNewTodo("")
      e.target.value = ""
    }, 20000))
  }

  const addItem = (e) => {
    e.preventDefault()

    if(newTodo.length < 6) {
      alert("Al menos 6 caracteres")
    } else {
      const newItem = {
        title: e.target.todo.value,
        id: uuidv4()
      }

      setResponseMessage("Tarea añadida!")

      setResponseTimeout(setTimeout(() => {
        setResponseMessage("")
      }, 5000))
  
      setTodoList([...todoList, newItem])
  
      e.target.todo.value = ""
      setNewTodo("")
    }

  }

  const deleteAllItems = () => {
    setTodoList([])
  }

  const resetItems = () => {
    setTodoList(list)
  }

  return <section className='list-container'>

    <form onSubmit={addItem} className="todolistForm">
      <input type="text" onChange={handleChange} name="todo"/>
      {newTodo.length!==0?<button type='submit'>ADD</button>:<p></p>}
    </form>

    {responseMessage.length?<p>{responseMessage}</p>:<p></p>}

    <button onClick={resetItems}>RESET</button>
    <button onClick={deleteAllItems}>DELETE ALL</button>

    {todoList.length?
    <section className='listItems'>
    {todoList.map(listItem => <TodoListItem title={listItem.title} key={listItem.id} deleteItem={() => deleteItem(listItem.id)}/>)}
    </section>
    :<p></p>}
  </section>;
};

export default TodoList;
