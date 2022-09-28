## 1. setState

### setState更新狀態的2種寫法

```
	(1). setState(stateChange, [callback]) ------ 對象式的 setState
            1. stateChange 為狀態改變對象(該對象可以體現出狀態的更改)
            2. callback是可選的回調函數, 它在狀態更新完畢、界面也更新後(render 調用後)才被調用
					
	(2). setState(updater, [callback]) ------ 函數式的 setState
            1. updater 為返回 stateChange 對象的函數
            2. updater 可以接收到 state 和 props
            4. callback 是可選的回調函數, 它在狀態更新、界面也更新後(render 調用後)才被調用
	總結:
		1.對象式的 setState 是函數式的 setState 的簡寫方式(語法糖)
		2.使用原則：
			(1). 如果新狀態不依賴於原狀態 ===> 使用對象方式
			(2). 如果新狀態依賴於原狀態 ===> 使用函數方式
			(3). 如果需要在 setState() 執行後獲取最新的狀態數據，要在第二個 callback 函數中讀取
```



------



## 2. lazyLoad

### 路由組件的lazyLoad

```js
	// 1. 通過 React 的 lazy 函數配合 import() 函數動態加載路由組件 ===> 路由組件代碼會被分開打包
	const Login = lazy(() => import('@/pages/Login'))
	
	//2. 通過 <Suspense> 指定在加載得到路由打包文件前顯示一個自定義 loading 界面
	<Suspense fallback={<h1>loading.....</h1>}>
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```



------



## 3. Hooks

#### 1. React Hook/Hooks是什麼?

```
(1). Hook 是 React 16.8.0 版本增加的新特性 / 新語法
(2). 可以讓你在函數組件中使用 state 以及其他的 React 特性
```

#### 2. 三個常用的Hook

```
(1). State Hook：React.useState()
(2). Effect Hook：React.useEffect()
(3). Ref Hook：React.useRef()
```

#### 3. State Hook

```
(1). State Hook 讓函數組件也可以有 state 狀態，並進行狀態數據的讀寫操作
(2). 語法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState() 說明：
        參數：第一次初始化指定的值在內部作緩存
        返回值：包含2個元素的數組，第1個為內部當前狀態值，第2個為更新狀態值的函數
(4). setXxx() 2種寫法：
        setXxx(newValue)：參數為非函數值，直接指定新的狀態值，內部用其覆蓋原來的狀態值
        setXxx(value => newValue)：參數為函數，接收原本的狀態值，返回新的狀態值，內部用其覆蓋原來的狀態值
```

#### 4. Effect Hook

```
(1). Effect Hook 可以讓你在函數組件中執行副作用操作(用於模擬類組件中的生命週期鉤子)
(2). React 中的副作用操作：
        發 ajax 請求數據獲取
        設置訂閱 / 啟動定時器
        手動更改真實 DOM
(3). 語法和說明：
        useEffect(() => { 
          // 在此可以執行任何帶副作用操作
          return () => { // 在組件卸載前執行
            // 在此做一些收尾工作, 比如清除定時器/取消訂閱等
          }
        }, [stateValue]) // 如果指定的是[], 回調函數只會在第一次 render() 後執行
    
(4). 可以把 useEffect Hook 看做如下三個函數的組合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 
```

#### 5. Ref Hook

```
(1). Ref Hook 可以在函數組件中存儲 / 查找組件內的標籤或任意其它數據
(2). 語法：const refContainer = useRef()
(3). 作用：保存標籤對象，功能與 React.createRef() 一樣
```



------



## 4. Fragment

### 使用

	<Fragment></Fragment>
	<></>

### 作用

> 可以不用必須有一個真實的DOM根標籤了



<hr/>

## 5. Context

### 理解

> 一種組件間通信方式，常用於【祖組件】與【後代組件】間通信

### 使用

```js
1) 創建 Context 容器對象：
	const XxxContext = React.createContext()  
	
2) 渲染子組時，外麵包裹 xxxContext.Provider，通過 value 屬性給後代組件傳遞數據：
	<xxxContext.Provider value={數據}>
		子組件
    </xxxContext.Provider>
    
3) 後代組件讀取數據：

	// 第一種方式：僅適用於類組件 
	static contextType = xxxContext  // 聲明接收 context
	this.context // 讀取 context 中的 value 數據
	  
	// 第二種方式：函數組件與類組件都可以
	<xxxContext.Consumer>
	    {
	      	value => ( // value 就是 context 中的 value 數據
	        	要顯示的內容
	      	)
	    }
	</xxxContext.Consumer>
```

### 注意

	在應用開發中一般不用 context，一般都用它的封裝 react 插件



<hr/>


## 6. 組件優化

### Component的2個問題 

> 1. 只要執行 setState()，即使不改變狀態數據，組件也會重新 render() ==> 效率低
>
> 2. 只當前組件重新 render()，就會自動重新 render 子組件，縱使子組件沒有用到父組件的任何數據 ==> 效率低

### 效率高的做法

>  只有當組件的 state 或 props 數據發生改變時才重新 render()

### 原因

>  Component 中的 shouldComponentUpdate() 總是返回 true

### 解決

	辦法1：
		重寫 shouldComponentUpdate() 方法
		比較新舊 state 或 props 數據, 如果有變化才返回 true，如果沒有返回 false
	辦法2：
		使用 PureComponent
		PureComponent 重寫了 shouldComponentUpdate()，只有 state 或 props 數據有變化才返回 true
		注意: 
			只是進行 state 和 props 數據的淺比較，如果只是數據對象內部數據變了，返回 false  
			不要直接修改state數據，而是要產生新數據
	項目中一般使用 PureComponent 來優化



<hr/>


## 7. render props

### 如何向組件內部動態傳入帶內容的結構(標籤)?

	Vue 中：
		使用 slot 技術，也就是通過組件標籤體傳入結構  <A><B/></A>
	React 中：
		使用 children props：通過組件標籤體傳入結構
		使用 render props：通過組件標籤屬性傳入結構，而且可以攜帶數據，一般用 render 函數屬性

### children props

	<A>
	  <B>xxxx</B>
	</A>
	{this.props.children}
	問題：如果 B 組件需要 A 組件內的數據 ==> 做不到 

### render props

	<A render={(data) => <C data={data}></C>}></A>
	A 組件：{ this.props.render(內部state數據) }
	C 組件：讀取 A 組件傳入的數據顯示 { this.props.data } 



<hr/>

## 8. 錯誤邊界

#### 理解：

錯誤邊界(Error boundary)：用來捕穫後代組件錯誤，渲染出備用頁面

#### 特點：

只能捕穫後代組件生命週期產生的錯誤，不能捕獲自己組件產生的錯誤和其他組件在合成事件、定時器中產生的錯誤

##### 使用方式：

getDerivedStateFromError配合componentDidCatch

```js
// 生命週期函數，一旦後台組件報錯，就會觸發
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前觸發
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 統計頁面的錯誤。發送請求發送到後台去
    console.log(error, info);
}
```

## 9. 組件通信方式總結

#### 組件間的關係：

- 父子組件
- 兄弟組件（非嵌套組件）
- 祖孫組件（跨級組件）

#### 幾種通信方式：

		1.props：
			(1).children props
			(2).render props
		2.消息訂閱-發布：
			pubs-sub、event等等
		3.集中式管理：
			redux、dva等等
		4.conText:
			生產者-消費者模式

#### 比較好的搭配方式：
		父子組件：props
		兄弟組件：消息訂閱-發布、集中式管理
		祖孫組件(跨級組件)：消息訂閱-發布、集中式管理、conText(開髮用的少，封裝插件用的多)