import React, { useEffect, useState, useMemo, useCallback, createContext } from 'react';
import { ToDo } from '../components/ToDo';
import { MessageLog } from '../components/MessageLog';

export const todoListContext = createContext()

export const ToDoList = () => {

    const [todoList, setToDoList] = useState([
        { id: 1, title: '筋トレ', done: false, limit: new Date("2023", "8") },
        { id: 2, title: '勉強', done: false, limit: new Date("2023", "8") },
        { id: 3, title: '犬の散歩' , done: false, limit: new Date("2023", "7") },
        { id: 4, title: '洗濯' , done: false, limit: new Date("2023", "7") },
        { id: 5, title: '料理' , done: false, limit: new Date("2023", "7") },
    ])


    const [count, setCount] = useState(0)

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

    const todoDoneCount = () => {
        return todoList.filter((todo) => todo.done).length
    }

    const messageLog = useCallback(() => {
        console.log("重い処理")
    },[])

    useEffect(() => {
        // 初期表示時のデータの取得（APIを叩いて最初に画面に表示しないといけないパラメータ）
        // データ変更時に再度APIからデータ取得してくる。
        console.log('初期表示されました！！')
    },[])

    useEffect(() => {
        console.log('todolistの情報を表示', todoList)
    }, [todoList])


    return (
        <todoListContext.Provider value={todoList}>
        <div>
            <MessageLog messageLog={messageLog} />
            <button onClick={() => setCount(count+1)}>+</button>
            カウント数{count}
            <p>TODO達成個数 {todoDoneCount()} / TODO数 {todoList.length}</p>
            {todoDoneCount === todoList.length && <p>全てのTODOを達成しました！</p>}
            <h1>ToDoList</h1>
            {
                todoList.map((todo) => {
                    return <ToDo key={todo.id} todoItem={todo} setTitleById={setTitleById} setToggleDoneById={setToggleDoneById} />
                })
            }
        </div>
        </todoListContext.Provider>
    );
}
