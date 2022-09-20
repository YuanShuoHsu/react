import React from 'react'
import { useParams } from 'react-router-dom'

const DetailData = [
    { id: "01", content: "你好，台灣" },
    { id: "02", content: "你好，尚硅谷" },
    { id: "03", content: "你好，未來的自己" },
]

export default function Details() {
    // 接收 params 參數
    const { id, title } = useParams();
    const findResult = DetailData.find((detailObj) => {
        return detailObj.id === id
    })
    return (
        <ul>
            <li>ID：{id}</li>
            <li>TITLE：{title}</li>
            <li>CONTENT：{findResult.content}</li>
        </ul>
    )
}
