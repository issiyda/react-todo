import React, { useState } from 'react';
import { ToDo } from '../components/ToDo';

export const ToDoList = () => {

    const [todoList, setToDoList] = useState([
        { id: 1, title: '筋トレ', done: false },
        { id: 2, title: '勉強', done: false },
        { id: 3, title: '犬の散歩' , done: false },
        { id: 4, title: '洗濯' , done: false },
        { id: 5, title: '料理' , done: false },
    ])

    const setToggleDoneById = (todoId) => {
        setToDoList(
            todoList.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo
                }
            })
        )
    }

    const setTitleById = (todoId, title) => {
        setToDoList(
            todoList.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        title
                    }
                } else {
                    return todo
                }
            })
        )
    }

    const todoDoneCount = todoList.filter((todo) => todo.done).length

    return (
        <div>
            <p>TODO達成個数 {todoDoneCount} / TODO数 {todoList.length}</p>
            {todoDoneCount === todoList.length && <p>全てのTODOを達成しました！</p>}
            <h1>ToDoList</h1>
            {
                todoList.map((todo) => {
                    return <ToDo key={todo.id} todoItem={todo} setTitleById={setTitleById} setToggleDoneById={setToggleDoneById} />
                })
            }
        </div>
    );
}
