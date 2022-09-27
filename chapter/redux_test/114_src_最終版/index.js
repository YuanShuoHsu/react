import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import store from "./redux/store"
import { Provider } from "react-redux"

ReactDOM.render(
    // 此處需要用 Provider 包裹 App，目的是讓 App 所有的後代容器組件都能接收到 store
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)