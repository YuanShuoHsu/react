// 引入 react 核心庫
import React from "react"
// 引入 ReactDOM
import ReactDOM from "react-dom"
// 引入 BrowserRouter、HashRouter
import { BrowserRouter } from "react-router-dom"
// 引入 App
import App from "./App"

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)