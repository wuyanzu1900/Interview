import React,{ useState,useContext,createContext } from 'react';
import CountContext from './middle'
import Son from './UseContext'
// const CountContext = createContext()

export default function One(){
    const [count , setCount]   = useState(0)
    const click =() =>{
        setCount(count+1)
    }
    return(
        <div>
            <p>您一共点击了{count}次</p>
            <button onClick={click}>计数</button>
            <CountContext.Provider value={count}>
                <Two />
            </CountContext.Provider>
        </div>
    )
}
