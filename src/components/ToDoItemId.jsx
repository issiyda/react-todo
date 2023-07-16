import { useContext } from "react"
import { todoListContext } from "../pages/ToDoList"

export const ToDoItemId = ({todoItemId}) => {
    const todoList = useContext(todoListContext)
    console.log('todoList',todoList);

    return <p>{todoList.find(t => t.id === todoItemId).id}</p>
}
