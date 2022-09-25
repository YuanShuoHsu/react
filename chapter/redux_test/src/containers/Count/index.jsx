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

// 創建 connect()() 創建並暴露一個 Count 的容器組件 
export default connect(
    state => ({ count: state }),

    // mapDispatchToProps 的一般寫法
    /* dispatch => ({
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
    }) */

    // mapDispatchToProps 的簡寫
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(CountUI)