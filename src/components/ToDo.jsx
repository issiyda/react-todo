import React from 'react'
import { ToDoItemId } from './ToDoItemId';
import { useEmergencyWord } from '../hooks/useEmergencyWord';
import { useTodoToggle } from '../hooks/useTodoToggle';
export const ToDo = ({todoItem, setTitleById, setToggleDoneById}) => {
    const ref = React.useRef();
    const { open, setOpen } = useTodoToggle()
    console.log('open',open);

    return (
        <>
        <h2>TODO</h2>
        {
            open && (
                <>
        <ToDoItemId todoItemId={todoItem.id} />
        <div>
            <p>
                {todoItem.done ? '完了' : '未完了'}
            </p>
            {/* <p>{useEmergencyWord(todoItem.limit)}</p> */}
        <input type="checkbox" checked={todoItem.done} onChange={() => setToggleDoneById(todoItem.id)} />
        </div>
        <input type="text" ref={ref} value={todoItem.title}
            onChange={(event) => {
                setTitleById(todoItem.id, event.target.value)
            } }
        />
        <button onClick={() => setOpen(!open)}>閉じる</button>
        </>
        )}
        {
            !open && (
                <p onClick={() => setOpen(!open)}>開く</p>
            )
        }
        </>
    )

}
