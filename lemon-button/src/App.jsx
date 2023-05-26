import React from 'react';
import ExplosionButton from './ExplosionButton';
import './ExplosionButton.scss';



const App = () => {
  return (
    <div  className='lemon-button-container'>
      <h1 className='lemon-explosion-title'>
Click for an explosion of Murcian wisdom!</h1>
      <ExplosionButton />
    </div>
  );
};

export default App;
