import React, { Component } from 'react'
import { Link, Routes, Route } from "react-router-dom"
import Home from "./pages/Home" // Home 是路由組件
import About from "./pages/About" // About 是路由組件
import Header from './components/Header' // Header 是一般組件

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* 原生 html 中，靠 <a> 跳轉不同的頁面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在 React 中靠路由鏈接實現切換組件--編寫路由鏈接 */}
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 註冊路由 */}
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
