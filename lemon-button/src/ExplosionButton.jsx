import React, { useState } from 'react';
import './ExplosionButton.scss';

const ExplosionButton = () => {
  const [explode, setExplode] = useState(false);

  const handleClick = () => {
    setExplode(true);
    setTimeout(() => {
      setExplode(false);
    }, 2000);
  };

  return (
    <div className='lemon-button-container'>
    <button className={`explosion-button ${explode ? 'explode' : ''}`} onClick={handleClick}>
      Click me Josmi
      {explode && (
        <>
          <span className="lemon-icon icon-1" />
          <span className="lemon-icon icon-2" />
          <span className="lemon-icon icon-3" />
        </>
      )}
    </button>
    </div>
  );
};

export default ExplosionButton;
