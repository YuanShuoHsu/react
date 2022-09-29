import React, { Component } from 'react'
// 引入 store，用於獲取 redux 中保存狀態
import store from "../../redux/store"
// 引入 actionCreator 專門用於創建 action 對象
import { createIncrementAction, createDecrementAction } from "../../redux/count_action"

export default class Count extends Component {

    state = {
        carName: "奔馳c63"
    }

    /* componentDidMount() {
        // 檢測 redux 中狀態的變化，只要變化，就調用 render
        store.subscribe(() => {
            this.setState({})
        })
    } */

    // 加法
    increment = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAction(value * 1))
    }
    // 減法
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }
    // 奇數再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    // 異步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAction(value * 1))
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>當前求和為：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>當前求和為奇數再加</button>&nbsp;
                <button onClick={this.incrementAsync}>異步加</button>&nbsp;
            </div>
        )
    }
}
