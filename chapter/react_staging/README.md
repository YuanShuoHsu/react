## 一、todoList 案例相關知識點
    1. 拆分組件、實現靜態組件，注意：className、style 的寫法
    2. 動態初始化列表，如何確定將數據放在哪個組件的 state 中？
        - 某個組件使用：放在其自身的 state 中
        - 某些組件使用：放在他們共同的父組件 state 中(官方稱此操作為：狀態提升)
    3. 關於父子之間通信：
        1. 【父組件】給【子組件】傳遞數據：通過 props 傳遞
        2. 【子組件】給【父組件】傳遞數據：通過 props 傳遞，要求父提前給子傳遞一個函數
    4. 注意 defaultChecked 和 checked 的區別，類似的還有：defaultValue 和 value
    5. 狀態在哪裡，操作狀態的方法就在哪裡

## 二、github 搜索案例相關知識點
    1. 設計狀態時要考慮全面，例如帶有網路請求的組件，要考慮請求失敗怎麼辦？
    2. ES6 小知識點：解構賦值 + 重命名
        let obj = {a:{b:1}}
        const {a} = obj // 傳統解構賦值
        const {a:{b}} = obj // 連續解構賦值
        const {a:{b:value}} = obj //連續解構賦值 + 重命名
    3. 消息訂閱與發佈機制
        1. 先訂閱，再發布(理解：有一種隔空對話的感覺)
        2. 適用於任意組件間通信
        3. 要在組件的 componentWillUnmount 中取消訂閱
    4. fetch 發送請求(關注分離的設計問題)
        try {
            const response = await fetch(`/api1/search/users2?q=${keyWord}`)
            const data = await response.json()
            console.log(data)
        }
        catch (error) {
            console.log("請求出錯", error)
        }

