/* 
    該文件專門用於暴露一個 store 對象，整個應用只有一個 store 對象
*/

// 引入 createStore 專門用於創建 redux 中最為核心的 store 對象
import { createStore } from "redux"
// 引入為 Count 組件服務的 reducer
import countReducer from "./count_reducer"
// 暴露 store
export default createStore(countReducer)