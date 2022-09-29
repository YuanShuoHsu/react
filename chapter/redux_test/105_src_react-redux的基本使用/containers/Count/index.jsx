// 引入 Count 的 UI 組件
import CountUI from "../../components/Count"
// 引入 action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action"

// 引入 connect 用於連接 UI 組件與 redux
import { connect } from "react-redux"

/*
    1. mapStateToProps 函數返回的是一個對象：
    2. 返回的對象中的 key 就作為傳遞給 UI 組件 props 的 key，value 就作為傳遞給 UI 組件 props 的 value
    3. mapStateToProps 用於傳遞狀態
 */
function mapStateToProps(state) {
    return { count: state }
}

/*
    1. mapDispatchToProps 函數返回的是一個對象：
    2. 返回的對象中的 key 就作為傳遞給 UI 組件 props 的 key，value 就作為傳遞給 UI 組件 props 的 value
    3. mapStateToProps 用於傳遞操作狀態的方法
 */
function mapDispatchToProps(dispatch) {
    return {
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
    }
}

// 創建 connect()() 創建並暴露一個 Count 的容器組件 
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)