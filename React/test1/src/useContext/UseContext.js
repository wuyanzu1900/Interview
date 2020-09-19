import React,{ useContext,createContext } from 'react';
import  CountContext  from'./middle'


export default function Son(){
    let count = useContext(CountContext)
    return(
        
        <div>
            <p>点击了{count}次</p>
        </div>
    )
}