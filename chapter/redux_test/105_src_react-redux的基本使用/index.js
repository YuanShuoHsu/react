import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import store from "./redux/store"

ReactDOM.render(<App />, document.getElementById("root"))

// 監測 redux 中狀態的改變，如 redux 的狀態發生了改變，那麼重新渲染 App 組件
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById("root"))
})