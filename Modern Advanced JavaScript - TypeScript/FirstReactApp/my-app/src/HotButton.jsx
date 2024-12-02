import React from 'react'

function HotButton({text}) {
  return (
    <button onClick={()=>console.log(`HotButton:${text}`)}>{text}</button>
  )
}

export default HotButton