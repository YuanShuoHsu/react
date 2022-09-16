import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from "axios"

export default class Search extends Component {

  search = () => {
    // 獲取用戶的輸入(連續解構賦值 + 重命名)
    const { keyWordElement: { value: keyWord } } = this
    // 發送請求前通知 List 更新狀態
    PubSub.publish("atguigu", { isFirst: false, isLoading: true })
    // 發送網路請求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        // 請求成功後通知 App 更新狀態
        PubSub.publish("atguigu", { isLoading: false, users: response.data.items })
      },
      error => {
        // 請求失敗後通知 App 更新狀態
        PubSub.publish("atguigu", { isLoading: false, err: error.message })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron" >
        <h3 className="jumbotron-heading">搜索 github 用戶</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="輸入關鍵詞點擊搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
