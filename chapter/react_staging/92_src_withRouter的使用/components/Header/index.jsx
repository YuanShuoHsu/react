import React from 'react'
import { useNavigate } from 'react-router-dom';
// import {withRouter} from 'react-router-dom'

export default function Header() {
    // console.log("Header組件收到的props是", this.props)

    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    const forward = () => {
        navigate(1)
    }

    const go = () => {
        navigate(2)
    }

    return (
        <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={back}>回退</button>&nbsp;
            <button onClick={forward}>前進</button>&nbsp;
            <button onClick={go}>go</button>&nbsp;
        </div>
    )
}

// export default withRouter(Header)

// withRouter 可以加工一般組件，讓一般組件具備路由組件所持有的 API
// withRouter 的返回值是一個新組件
