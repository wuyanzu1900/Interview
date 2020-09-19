import React,{ useReducer } from 'react';

export default function Computer(){
    const [ count, dispatch ] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default:
                return state
        }
    },0)
    const one =() =>{
        dispatch('add')
    }
    const two =() =>{
        dispatch('sub')
    }
    return(
        <div>
            <p>您的得分为:{count}</p>
            <button onClick={one}>+</button>
            <button onClick={two}>-</button>
        </div>
    )
}