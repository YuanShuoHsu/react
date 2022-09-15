import React, { Component } from 'react'
import axios from "axios"

export default class Search extends Component {

  search = () => {
    // 獲取用戶的輸入(連續解構賦值 + 重命名)
    const { keyWordElement: { value: keyWord } } = this
    console.log(keyWord)
    // 發送網路請求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        this.props.saveUsers(response.data.items)
      },
      error => { console.log("失敗了", error) }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 github 用戶</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="輸入關鍵詞點擊搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
