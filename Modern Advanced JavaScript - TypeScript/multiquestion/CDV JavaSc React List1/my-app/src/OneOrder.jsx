
import React from 'react'

function OneOrder({text}) {
  return (
    <li>{text}</li>
  )
}

export function OneOrder2({oid,text}) {
  return (
    <li>Order: {oid} - {text}</li>
  )
}

export default OneOrder