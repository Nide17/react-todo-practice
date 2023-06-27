import React from "react";
function Todo({ index, todosArr, setTodosArr, todo }) {

    const todoTitle = todo && todo.title
    const isComplete = todo && todo.complete

    function completeToggle(todoTitle) {

        // COPY OF TODOS
        const todosCopy = [...todosArr]

        // CHECK IF ALREADY EXIST
        const todo = todosCopy.find(function (td) {
            if (td.title === todoTitle) {
                return td
            }
            else {
                return null
            }
        })

        // TOGGLING
        todo.complete = !todo.complete

        // SET NEW TODOS
        setTodosArr(todosCopy)
    }

    function deleteTodo(todoTitle) {

        // COPY OF THE STATE
        const todosCopy = [...todosArr]

        // DELETE: FILTER THOSE THAT NOT EQUAL TO GIVEN TITLE
        const newTodos = todosCopy.filter(function (todo) {
            return todo.title !== todoTitle
        })

        // UPDATE THE STATE
        if (newTodos) {
            setTodosArr(newTodos)
        }
    }

    return (
        <div key={index} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <button onClick={() => deleteTodo(todoTitle)} style={{ padding: "0 2px", backgroundColor: "red", lineHeight: ".7", marginRight: "3px" }}> x </button>
            <input type="checkbox" onClick={() => completeToggle(todoTitle)} defaultChecked={isComplete} />
            {todoTitle}
        </div>
    )
}

export default Todo