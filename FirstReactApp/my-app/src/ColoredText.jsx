import React from 'react';

function ColoredText({red,green,blue,text}){
    const myColor =`#${red}${green}${blue}`;
    
    return <h1  style={{color: myColor}}>{text}</h1>;
}

export default ColoredText;