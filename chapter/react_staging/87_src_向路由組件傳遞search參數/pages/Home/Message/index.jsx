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
                                    {/* <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由組件傳遞 search 參數 */}
                                    <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>

                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Routes>
                    {/* 聲明接收 params 參數 */}
                    {/* <Route path="detail" element={<Detail />} >
                        <Route path=":id" element={<Detail />} >
                            <Route path=":title" element={<Detail />} />
                        </Route>
                    </Route> */}

                    {/* search 參數無需聲明接收，正常註冊路由即可 */}
                    <Route path="detail" element={<Detail />} />
                </Routes>
            </div >
        )
    }
}
