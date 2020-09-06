
import React from 'react'
import UseClock from './useClock.js'

function Clock(){
  return(
    <>
      <UseClock />
    </>
  
  )
}
export default Clock
文件2：useClock.js

import React,{ useState, useEffect } from 'react'

export default function UseClock(){
  const [ date, setDate] = useState('new Date()')
  const [ day, setDay] = useState('date.getDay()')
  const showTime = (day) =>{
    let dayStr;
    switch(day){
      case day===0:dayStr = '星期日'
      case day===1:dayStr = '星期一'
      case day===2:dayStr = '星期二'
      case day===3:dayStr = '星期三'
      case day===4:dayStr = '星期四'
      case day===0:dayStr = '星期五'
      case day===0:dayStr = '星期六'
    }
    return dayStr + day.toLocaleTimeString()
  const tick = ()=>{
    setDate:{date:new Date()}
  }
  useEffect(() => {
    const timerID = setInterval(() =>{
      setDate(tick())
    },1000)
  },[])
  return(
    <div>{showTime()}</div>
  ) => clearInterval(timerID)
}


