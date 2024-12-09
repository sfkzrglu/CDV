import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OrdersList,{OrdersList2,OrdersList3,OrdersList4} from './OrdersList';
import Tasks from './Tasks';

function App() {
  {/*Task 1*/}
  const orders=['Hamburger','Fries','Cheese Burger','Pizza'];
  {/*Task 2,3*/}
  const orderObjects=[{oid:5,text:'Hamburger'},
    {oid:12,text:'Fries'},
    {oid:17,text:'Cheese Burger'},
    {oid:20,text:'Pizza'}
  ];
  {/*Task 4*/}
  const orderObjects2=[];

  return (
    <>
      <Tasks taskStartindex={1}>
        {/*Task 1*/}
        <OrdersList orders={orders}/>
        {/*Task 2*/}
        <OrdersList2 orders={orderObjects}/>
        {/*Task 3*/}
        <OrdersList3 orders={orderObjects}/>
        {/*Task 4*/}
        <OrdersList4 orders={orderObjects2}/>
      </Tasks>     
    </>
  )
}

export default App
