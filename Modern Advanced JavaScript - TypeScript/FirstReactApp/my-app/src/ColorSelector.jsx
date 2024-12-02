import React from 'react';

function ColorSelector({ children }) {
    return (
        <div>
            <h1>Color Selector</h1>
            <div>{children}</div>
        </div>
    );
}

export function ColorButton({ color, size, children }) {
    const myColor = `#${color}`;
    return (
        <button style={{ color: myColor,fontSize: `${size}px`}}>{children}</button>
    );
}

export default ColorSelector