import React, { useState } from 'react';

function DownCounter({start}) {
    const [count,setCount]=useState(start);

    function countDown() {
        setCount(count - 1);
        console.log(count - 1);
    }
    
    return count>0?(
        <button onClick={countDown} style={{borderColor:"red"}}>{count}</button>
    ):(<p>Finished!</p>);
}

export default DownCounter;