import React, { Component } from 'react'
import Count from './containers/Count' // 引入的是 Count 的容器組件
import Person from './containers/Person' // 引入的是 Person 的容器組件

export default class App extends Component {
    render() {
        return (
            <div>
                <Count />
                <hr />
                <Person />
            </div>
        )
    }
}
