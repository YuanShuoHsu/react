## 1. 求和案例_redux精簡版
    (1). 去除 Count 組件自身的狀態
    (2). src下建立：
        - redux
            - store.js
                - count_reducer.js
    (3). store.js：
        1). 引入 redux 中的 createStore 函數，創建一個 store
        2). createStore 調用時要傳入一個為其服務的 reducer
        3). 記得暴露 store 對象
    (4). count_reducer.js
        1). reducer 的本質是一個函數，接收：preState, action，返回加工後的狀態
        2). reducer 的兩個作用：初始化狀態、加工狀態
        3). reducer 被第一次調用時，是 store 自動觸發的，
            傳遞的 preState 是 undefined
            傳遞的 action 是 :{ type: '@@REDUX/INIT_a.2.b.4' }
    (5). 在 index.js 中監測 store 中狀態的改變，一旦發生改變重新渲染 <App/>
        備註：redux 只負責狀態管理，至於狀態的改變驅動者頁面的展示，要靠我們自己寫

## 2. 求和案例_redux完整版
    新增文件：
        1. count_action.js 專門用於創建 action 對象
        2. constant.js 放置容易寫錯的 type 值

## 3. 求和案例_redux異步action版
    (1). 明確：延遲的動作不想交給組件自身，想交給 action
    (2). 何時需要異步 action：想要對狀態進行操作，但是具體的數據靠異步任務返回
    (3). 具體編碼：
        1). yarn add redux-thunk，並配置在 store 中
        2). 創建 action 函數不再返回一般對象，而是一個函數，該函數中寫異步任務
        3). 異步任務有結果後，分發一個同步的 action 去真正操作數據
    (4). 備註：異步 action 不是必須要寫的，完全可以自己等待異步任務的結果了再去分發同步 action

## 4. 求和案例_react-redux基本使用
    (1). 明確兩個概念：
        1). UI 組件：不能使用任何 redux 的 api，只負責頁面的呈現、交互等
        2). 如何創建一個容器組件 -- 靠 react-redux 的 connect 函數
            connect(mapStateToProps, mapDispatchToProps)(UI 組件)
            - mapStateToProps：映射狀態，返回值是一個對象
            - mapDispatchToProps：映射操作狀態的方法，返回值是一個對象
        3). 備註1：容器組件中的 store 是靠 props 傳進去的，而不是在容器組件中直接引入
        4). 備註2：mapDispatchToProps，也可以是一個對象

## 5. 求和案例_react-redux優化
    (1). 容器組件和 UI 組件整合成一個文件
    (2). 無需自己給容器組件傳遞 store. 給 <App/> 包裹一個 <Provider store={store}> 即可
    (3). 使用了 react-redux 後也不用再自己檢測 redux 中狀態的改變了，容器組件可以自動完成這個工作
    (4). mapDispatchToProps 也可以簡單的寫成一個對象
    (5). 一個組件要和 redux "打交道" 要經過哪幾步？
        (1). 定義好 UI 組件 -- 不暴露
        (2). 引入 connect 生成一個容器組件，並暴露，寫法如下：
            connect(
                state => ({ key: value}), // 映射狀態
                { key: xxxxxAction } // 映射操作狀態的方法
            )(UI 組件)
        (3). 在 UI 組件中通過 this.props.xxxxx 讀取和操作狀態

## 6.求和案例_react-redux數據共享版
    (1). 定義一個 Person 組件，和 Count 組件通過 redux 共享數據
    (2). 為 Person 組件編寫：reducer、action，配置 constant 常量
    (3). 重點：Person 的 reducer 和 Count 的 Reducer 要使用 combineReducers 進行合併，合併後的總狀態是一個對象！
    (4). 交給 store 的是總 reducers，最後注意在組件中取出狀態的時候，記得"取到位"

## 7. 求和案例_react-redux開發者工具的使用
    (1). yarn add redux-devtools-extension
    (2). store 中進行配置
        import { composeWithDevTools } from "redux-devtools-extension"
        const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))