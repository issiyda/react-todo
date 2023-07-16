import React, { useContext } from 'react'
import { todoListContext } from '../pages/ToDoList'

export const MessageLog = React.memo(({messageLog}) => {
    messageLog()
    const todoList = useContext(todoListContext)
    return (
        <div>
            <h3>
            TODOリスト
            </h3>
            {
                todoList.map((todo) => {
                    return (
                        <div key={todo.id}>
                           {todo.title}
                        </div>
                    )
                })
            }
        </div>
    )
})
