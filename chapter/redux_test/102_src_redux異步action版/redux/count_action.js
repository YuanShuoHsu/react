/* 
    該文件專門為 Count 組件生成 action 對象
*/
import { INCREMENT, DECREMENT } from "./constant"

// 同步 action，就是指 action 的值為 Object 類型的一般對象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

// 異步 action，就是指 action 的值為函數，異步 action 中一般都會調用同步 action，異步 action 不是必須要用的
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}