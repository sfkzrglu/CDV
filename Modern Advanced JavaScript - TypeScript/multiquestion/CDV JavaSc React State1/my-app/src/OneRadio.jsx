import React from 'react';

export default function OneRadio({ text, selected, onClick }) {
  return (
    <div
      style={{
        padding: '10px 15px',
        border: `1px solid ${selected ? '#007BFF' : '#ccc'}`,
        backgroundColor: selected ? '#007BFF' : '#fff',
        color: selected ? '#fff' : '#000',
        cursor: 'pointer',
        textAlign: 'center',
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
