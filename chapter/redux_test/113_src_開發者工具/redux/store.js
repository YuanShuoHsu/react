/* 
    該文件專門用於暴露一個 store 對象，整個應用只有一個 store 對象
*/

// 引入 createStore 專門用於創建 redux 中最為核心的 store 對象
import { createStore, applyMiddleware, combineReducers } from "redux"
// 引入為 Count 組件服務的 reducer
import countReducer from "./reducers/count"
// 引入為 Person 組件服務的 reducer
import personReducer from "./reducers/person"
// 引入 redux-thunk 用於支持異步 action
import thunk from "redux-thunk"
// 引入 redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension"

// 匯總所有的 reducer 變為一個總的 reducer
const allReducer = combineReducers({
    he: countReducer,
    rens: personReducer
})

// 暴露 store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))