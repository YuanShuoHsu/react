/* 
    該文件用於匯總所有的 reducer 為一個總的 reducer
*/

// 引入 combineReducers，用於匯總多個 reducer
import { combineReducers } from "redux"
// 引入為 Count 組件服務的 reducer
import count from "./count"
// 引入為 Person 組件服務的 reducer
import persons from "./person"

// 匯總所有的 reducer 變為一個總的 reducer
export default combineReducers({
    count,
    persons
})
