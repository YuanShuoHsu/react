// 創建"外殼"組件 App
import React, { Component } from "react"
import Hello from "./components/Hello"
import Welcome from "./components/Welcome"

// 創建並暴露 App 組件
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}