import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = { // 初始化狀態
    users: [], // users 初始值為數組
    isFirst: true, // 是否為第一次打開頁面
    isLoading: false, // 標識是否處於加載中
    err: "", // 存儲請求相關錯誤信息
  }

  // 更新 App 的 state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
