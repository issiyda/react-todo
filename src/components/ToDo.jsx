import React from 'react'
export const ToDo = ({todoItem, setTitleById, setToggleDoneById}) => {
    console.log('todoItem',todoItem);

    return (
        <>
        <h2>TODO</h2>
        <p>{todoItem.id}</p>
        <div>
            <p>
                {todoItem.done ? '完了' : '未完了'}
            </p>
        <input type="checkbox" checked={todoItem.done} onChange={() => setToggleDoneById(todoItem.id)} />
        </div>
        <input type="text" value={todoItem.title}
            onChange={(event) => {
                setTitleById(todoItem.id, event.target.value)
            } }
        />
        </>
    )

}
