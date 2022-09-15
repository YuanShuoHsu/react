import React, { Component } from 'react'
import PubSub from "pubsub-js"
import "./index.css"

export default class List extends Component {

  state = { // 初始化狀態
    users: [], // users 初始值為數組
    isFirst: true, // 是否為第一次打開頁面
    isLoading: false, // 標識是否處於加載中
    err: "", // 存儲請求相關錯誤信息
  }

  componentDidMount() {
    this.token = PubSub.subscribe("atguigu", (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>歡迎使用，輸入關鍵字，隨後點擊搜索</h2> :
            isLoading ? <h2>Loading...</h2> :
              err ? <h2 style={{ color: "red" }}>{err}</h2> :
                users.map((userObj) => {
                  return (
                    <div key={userObj.id} className="card">
                      <a rel="noreferrer" href={userObj.html_url} target="_blank">
                        <img alt='head_portrait' src={userObj.avatar_url} style={{ width: "100px" }} />
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
        }
      </div>
    )
  }
}
