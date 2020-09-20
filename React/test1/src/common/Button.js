import React,{useContext} from 'react';
import { ColorContext,UPDATE_COLOR } from './Middle'


export default function Button() {
    const { dispatch } = useContext(ColorContext)
    const click1 =() =>{
        dispatch({
            type:UPDATE_COLOR,
            color:"yellow"
        })
    }
    const click2 =() =>{
        dispatch({
            type:UPDATE_COLOR,
            color:"red"
        })
    }
    const click3 =() =>{
        dispatch({
            type:UPDATE_COLOR,
            color:"blue"
        })
    }
    return(
        <div>
            <button onClick={click1}>黄色</button>
            <button onClick={click2}>红色</button>
            <button onClick={click3}>蓝色</button>
        </div>
    )
}