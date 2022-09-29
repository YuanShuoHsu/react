import React, { Component } from 'react'

export default class Demo extends Component {

    state = { count: 0 }

    add = () => {
        // 對象式的 setState
        /* // 1. 獲取原來的 count 值
        const { count } = this.state
        // 2. 更新狀態
        this.setState({ count: count + 1 }, () => {
            console.log(this.state.count)
        })
        // console.log(this.state.count) // 0s */

        // 函數式的 setState
        this.setState(state => ({ count: state.count + 1 }))
    }

    render() {
        return (
            <div>
                <h1>當前求和為：{this.state.count}</h1>
                <button onClick={this.add}>點我+1</button>
            </div>
        )
    }
}
