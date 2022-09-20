import React, { Component } from 'react'
import { Link, Routes, Route } from "react-router-dom"
import Detail from "./Detail"

export default class Message extends Component {
    state = {
        messageArr: [
            { id: "01", title: "消息1" },
            { id: "02", title: "消息2" },
            { id: "03", title: "消息3" },
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由組件傳遞 params 參數 */}
                                    <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Routes>
                    {/* 聲明接收 params 參數 */}
                    <Route path="detail" element={<Detail />} >
                        <Route path=":id" element={<Detail />} >
                            <Route path=":title" element={<Detail />} />
                        </Route>
                    </Route>
                </Routes>
            </div >
        )
    }
}
