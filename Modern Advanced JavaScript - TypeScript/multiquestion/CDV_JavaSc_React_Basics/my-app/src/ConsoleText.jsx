import React from 'react'

export const TextType = {
    success: "success",
    info: "info",
    danger: "danger",
  };


function ConsoleText({text,textType}) {
    let col;
    switch (textType) {
        case TextType.success:
            col='red';       
        break;
        case TextType.info:
            col='blue';
        break;
        case TextType.danger:
            col='green';
        break;
    }
    return (
    <button style={{color:col}} onClick={()=>console.log(`Clicked:${text}`)}>{text}</button>
    )
}

export default ConsoleText