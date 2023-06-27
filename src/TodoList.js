import React from "react";
import Todo from './Todo'
function TodoList({ todosArr, setTodosArr, unfinished, finished }) {

    return (
        <>
            {unfinished && unfinished.length > 0 &&
                <div>
                    <h3>Unfinished todos ({unfinished.length})</h3>
                    {
                        unfinished && unfinished.map(function (todo, index) {
                            return (
                                <Todo todosArr={todosArr} setTodosArr={setTodosArr} todo={todo} index={index} key={index} />
                            )
                        })
                    }
                    <hr />
                </div>
            }

            {finished && finished.length > 0 &&
                <div>
                    <h3>Finished todos ({finished.length})</h3>
                    {
                        finished && finished.map(function (todo, index) {
                            return (
                                <Todo todosArr={todosArr} setTodosArr={setTodosArr} todo={todo} index={index} key={index} />
                            )
                        })
                    }
                    <hr />
                </div>
            }

            <div>
                {
                    todosArr && todosArr.length > 0 ?
                        <>
                            <h3 style={{ color: "green" }}>You have {todosArr.length} todos in total!</h3>
                        </> :
                        <h3 style={{ color: "red" }}>No todos available</h3>
                }
            </div>

        </>
    )
}

export default TodoList