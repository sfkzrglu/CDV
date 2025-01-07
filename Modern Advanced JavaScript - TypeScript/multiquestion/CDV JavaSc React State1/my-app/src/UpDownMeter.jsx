import React, { useState } from 'react';

function UpDownMeter({start,max,min}) {
    const [count,setCount]=useState(start);

    function updateCount(val){
        const numericVal = Number(val); 
        if (!isNaN(numericVal) && numericVal>min && numericVal<max) {
            setCount(numericVal);
        }
    }   
    function decreaseCount(){
        updateCount(count-1);
    }
    function increaseCount(){
        updateCount(count+1);
    }

    return (
        <div>
            <button onClick={decreaseCount} style={{borderColor:"red"}}>-</button>
            <input type='number' value={count} onChange={(ev) => updateCount(ev.target.value)} style={{borderColor:"blue"}}></input>
            <button onClick={increaseCount} style={{borderColor:"green"}}>+</button>
        </div>
    )
}

export default UpDownMeter

