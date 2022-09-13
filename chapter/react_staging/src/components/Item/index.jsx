import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {

    state = {
        mouse: false // 標識鼠標移入、移出
    }

    // 鼠標移入、移出回調
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    // 勾選、取消勾選某一個 todo 的回調
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? "#ddd" : "white" }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>刪除</button>
            </li>
        )
    }
}
