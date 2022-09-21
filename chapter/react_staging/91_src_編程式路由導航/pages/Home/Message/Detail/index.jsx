import React from 'react'
import { useLocation} from 'react-router-dom'
// import qs from 'qs'

const DetailData = [
    { id: "01", content: "你好，台灣" },
    { id: "02", content: "你好，尚硅谷" },
    { id: "03", content: "你好，未來的自己" },
]

export default function Details() {

    // 接收 params 參數
    // const { id, title } = useParams();

    // 接收 search 參數
    // const { search } = useLocation();
    // const { id, title } = qs.parse(search.slice(1))

    // 接收 state 參數
    const { state } = useLocation();
    const { id, title } = state || {};

    const findResult = DetailData.find((detailObj) => {
        return detailObj.id === id
    }) || {}
    return (
        <ul>
            <li>ID：{id}</li>
            <li>TITLE：{title}</li>
            <li>CONTENT：{findResult.content}</li>
        </ul>
    )
}
