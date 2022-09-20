import React, { Component } from 'react'
import MyNavLink from "../../components/MyNavLink"
import { Routes, Route, Navigate } from 'react-router-dom'
import News from "./News"
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的內容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="message">Message</MyNavLink>
                        </li>
                    </ul>
                    {/* 註冊路由 */}
                    <Routes>
                        <Route path="news" element={<News />} />
                        <Route path="message" element={<Message />} />
                        <Route path="*" element={<Navigate replace to="news" />} />
                    </Routes>
                </div>
            </div>
        )
    }
}
