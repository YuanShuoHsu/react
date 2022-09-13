import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {
    render() {
        const { id, name, done } = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: "none" }}>刪除</button>
            </li>
        )
    }
}
