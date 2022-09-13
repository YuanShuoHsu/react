import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import "./App.css"

export default class App extends Component {
    // 狀態在哪裡，操作狀態的方法就在哪裡

    // 初始化狀態
    state = {
        todos: [
            { id: "001", name: "吃飯", done: true },
            { id: "002", name: "睡覺", done: true },
            { id: "003", name: "打代碼", done: false },
            { id: "004", name: "逛街", done: true }
        ]
    }

    // addTodo 用於添加一個 todo，接收的參數是 todo 對象
    addTodo = (todoObj) => {
        // 獲取原 todos
        const { todos } = this.state
        // 追加一個 todo
        const newTodos = [todoObj, ...todos]
        // 更新狀態
        this.setState({ todos: newTodos })
    }

    // updateTodo 用於更新一個 todo 對象
    updateTodo = (id, done) => {
        // 獲取狀態中的 todos
        const { todos } = this.state
        // 匹配處理數據
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
        })

        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} />
                    <Footer />
                </div>
            </div>
        )
    }
}