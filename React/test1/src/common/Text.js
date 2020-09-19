import React,{ useContext ,createContext } from 'react';
import { ColorContext} from './Middle'

export default function Text(){
    const {color} = useContext(ColorContext)
    return(
    <div style={{color:color}}>当前颜色为{color}色</div>
    )
}