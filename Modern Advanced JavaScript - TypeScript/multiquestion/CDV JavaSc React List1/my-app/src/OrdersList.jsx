import React,{useState} from 'react'
import OneOrder,{OneOrder2} from './OneOrder'

function OrdersList({orders}) {
  return (
    <ul>{orders.map(function(el) { 
       return <OneOrder key={el} text={el}/>
      })}
      </ul>
  )
}

export function OrdersList2({orders}) {
  return (
    <ul>{orders.map((order) => (
      <OneOrder2 key={order.oid} oid={order.oid} text={order.text}/>
     ))}
    </ul>
  )
}

export function OrdersList3({orders}) {
  const [editable, setEditable] = useState(true);
  const handleEdit = () => {
    if (!editable) {
      setEditable(true);
    }
  };
  console.log(editable)
  return (
    <>
      <form>
        <label>New Order</label>
        <input type="text" name="neworder" id="neworder" value='Eggs & Bacon' onChange={handleEdit} readOnly={!editable}/>
      </form>
      <ul>{orders.map((order) => (
        <OneOrder2 key={order.oid} oid={order.oid} text={order.text}/>
       ))}
      </ul>
    </> 
  )
}

export default OrdersList