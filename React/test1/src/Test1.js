import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('欢迎吴彦祖')
        return () => {
            console.log('吴彦祖再见')
        }
    }, [])
    return <h1>吴彦祖您好！</h1>
}
function List() {
    useEffect(() => {
        console.log('欢迎彭于晏')
        return () => {
            console.log('彭于晏走了')
        }
    }, [])
    return <h1>彭于晏您好</h1>
}
function Test() {
    const [count, setCount] = useState(0)
    const click = () => {
        setCount(count + 1)
    }
    useEffect(() =>{
        console.log('您点击了按钮')
        return () =>{
            console.log('您离开了按钮')
        }
    },[count])
    return (
        <div>
            <h1>您一共点击了{count}次</h1>
            <button onClick={click}>计数按钮</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/List">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/List"  component={List}/>
            </Router>
        </div>

    )
}
export default Test