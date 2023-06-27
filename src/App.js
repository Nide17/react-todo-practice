import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'

function App() {

  const [todosArr, setTodosArr] = useState(() => {

    // GET STATE FROM LOCAL STORAGE
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  });

  // UNFINISHED TODOS
  const unfinished = todosArr.filter(function (todo) {
    return todo.complete === false
  })

  // FINISHED TODOS
  const finished = todosArr.filter(function (todo) {
    return todo.complete === true
  })

  // DEFINING THE REFERENCE HOOK TO REFER TO ref ATTRIBUTE OF DOM ELEMENT
  const todoRef = useRef()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosArr))
  }, [todosArr])


  // FUNCTION FOR ADDING NEW TO DO
  function addNewToDo() {

    if (!todoRef.current.value) {
      alert('To do can not be empty!')
    }
    else {
      // COPY OF TODOS
      const todosCopy = [...todosArr]

      // CHECK IF ALREADY EXIST
      const exist = todosCopy.find(function (td) {
        return td.title === todoRef.current.value
      })

      if (exist) {
        alert('That to do already exist!')
      }

      else {
        // ADD NEW TO DO TO START
        todosCopy.unshift({ title: todoRef.current.value, complete: false })

        // RESET FIELD
        todoRef.current.value = null

        // SET THE STATE
        setTodosArr(todosCopy)
      }
    }
  }

  return (
    <div className="todoApp" style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h2>Welcome to the TODO app</h2>
      <h4>There is {unfinished.length} todos to complete</h4>

      <input ref={todoRef} type="text" placeholder="Enter to do ..." />
      <button onClick={addNewToDo} type="submit" style={{ margin: "20px auto" }}>Add new todo</button>

      <TodoList todosArr={todosArr} setTodosArr={setTodosArr} unfinished={unfinished} finished={finished} />
    </div>
  );
}

export default App;