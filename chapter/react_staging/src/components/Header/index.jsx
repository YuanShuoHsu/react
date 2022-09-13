import React, { Component } from 'react'
import { nanoid } from "nanoid"
import "./index.css"

export default class Header extends Component {

    handleKeyUp = (event) => {
        // 解構賦值 keyCode, target
        const { keyCode, target } = event
        // 判斷是否是回車按鍵
        if (keyCode !== 13) return
        // 添加的 todo 名字不能為空
        if (target.value.trim() === "") {
            alert("輸入不能為空")
            return
        }
        // 準備好一個 todo 對象
        const todoObj = { id: nanoid(), name: target.value, done: false }
        // 將 todoObj 傳遞給 App
        this.props.addTodo(todoObj);
        // 清空輸入
        target.value = ""
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder='請輸入你的任務名稱，按回車鍵確認' />
            </div>
        )
    }
}
