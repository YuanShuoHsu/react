import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {
    users: [] // 初始化狀態，users 初始值為數組
  }

  saveUsers = (users) => {
    this.setState({ users })
  }
  render() {
    const { users } = this.state
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />
        <List users={users} />
      </div>
    )
  }
}
