import React, { useState } from 'react'
import { Link, Routes, Route, useNavigate } from "react-router-dom"
import Detail from "./Detail"

export default function Message() {
    const [messageArr,] = useState([
        { id: "01", title: "消息1" },
        { id: "02", title: "消息2" },
        { id: "03", title: "消息3" },
    ]);

    const navigate = useNavigate();

    const replaceShow = (id, title) => {
        // replace 跳轉 + 攜帶 params 參數
        // navigate(`detail/${id}/${title}`, { replace: true })

        // replace 跳轉 + 攜帶 search 參數
        // navigate(`detail/?id=${id}&title=${title}`, { replace: true })

        // replace 跳轉 + 攜帶 state 參數
        navigate("detail", { state: { id, title }, replace: true })
    }

    const pushShow = (id, title) => {
        // push 跳轉 + 攜帶 params 參數
        // navigate(`detail/${id}/${title}`)

        // push 跳轉 + 攜帶 search 參數
        // navigate(`detail/?id=${id}&title=${title}`)

        // replace 跳轉 + 攜帶 state 參數
        navigate("detail", { state: { id, title } })
    }

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
        <div>
            <ul>
                {
                    messageArr.map((msgObj) => {
                        return (
                            <li key={msgObj.id}>

                                {/* 向路由組件傳遞 params 參數 */}
                                {/* <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                {/* 向路由組件傳遞 search 參數 */}
                                {/* <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                {/* 向路由組件傳遞 state 參數 */}
                                <Link to={"detail"} state={{ id: msgObj.id, title: msgObj.title }}>{msgObj.title}</Link>

                                &nbsp;<button onClick={() => pushShow(msgObj.id, msgObj.title)}>push查看</button>
                                &nbsp;<button onClick={() => replaceShow(msgObj.id, msgObj.title)}>replace查看</button>

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
                {/* <Route path="detail" element={<Detail />} /> */}

                {/* state 參數無需聲明接收，正常註冊路由即可 */}
                <Route path="detail" element={<Detail />} />
            </Routes>

            <button onClick={back}>回退</button>&nbsp;
            <button onClick={forward}>前進</button>&nbsp;
            <button onClick={go}>go</button>&nbsp;
        </div >
    )
}
