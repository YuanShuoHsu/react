import React, { Component } from 'react'

// 引入 action
import {
    increment,
    decrement,
    incrementAsync
} from "../../redux/actions/count"

// 引入 connect 用於連接 UI 組件與 redux
import { connect } from "react-redux"

// 定義 UI 組件
class Count extends Component {

    state = {
        carName: "奔馳c63"
    }

    // 加法
    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value * 1)
    }
    // 減法
    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value * 1)
    }
    // 奇數再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    // 異步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(value * 1, 500)
    }

    render() {
        // console.log("UI組件接收到的props是", this.props)
        return (
            <div>
                <h2>我是Count組件</h2>
                <h4>當前求和為：{this.props.count}，下方組件總人數為：{this.props.personCount}</h4>
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

// 創建 connect()() 創建並暴露一個 Count 的容器組件 
export default connect(
    state => ({
        count: state.count,
        personCount: state.persons.length
    }),
    { increment, decrement, incrementAsync }
)(Count)