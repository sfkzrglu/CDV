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

export function OrdersList3({ orders }) {
  const [inputValue, setInputValue] = useState('Eggs & Bacon');

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };

  return (
    <>
      <form>
        <label htmlFor="neworder">New Order</label>
        <input type="text" name="neworder" id="neworder" value={inputValue} onChange={handleInputChange}  />
      </form>
      <ul>
        {orders.map((order) => (
          <OneOrder2 key={order.oid} oid={order.oid} text={order.text} />
        ))}
      </ul>
    </>
  );
}

export function OrdersList4({ orders }) {
  const [inputValue, setInputValue] = useState('');
  const [index, setIndex] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };

  const handleAdd = (event) => {
    if (inputValue.length>0) {
      orders.push({oid:index,text:inputValue});
      setInputValue('');
      setIndex(++orders[orders.length-1].oid);
    }else{
      event.preventDefault();
    }
  };

  return (
    <>
      <div>
        <label htmlFor="neworder">New Order</label>
        <input type="text" name="neworder" id="neworder" value={inputValue} onChange={handleInputChange}  />       
        <button onClick={handleAdd}>Add</button>
      </div>  
      <ul>
        {orders.map((order) => (
          <OneOrder2 key={order.oid} oid={order.oid} text={order.text} />
        ))}
      </ul>
    </>
  );
}

export default OrdersList;