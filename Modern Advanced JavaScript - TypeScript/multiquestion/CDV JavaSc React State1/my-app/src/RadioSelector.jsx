import React, { useState } from 'react';
import OneRadio from './OneRadio';

function RadioSelector({ options }) {
  const [selectedId, setSelectedId] = useState(
    options.find((option) => option.selected)?.id || ""
  );

  const handleSelection = (id) => {
    setSelectedId(id);
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {options.map((option) => (
        <OneRadio
          key={option.id}
          id={option.id}
          text={option.text}
          selected={selectedId === option.id}
          onClick={() => handleSelection(option.id)}
        />
      ))}
    </div>
  );
}

export default RadioSelector;
