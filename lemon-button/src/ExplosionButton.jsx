import React, { useState } from 'react';
import './ExplosionButton.scss';

const ExplosionButton = () => {
  const [explode, setExplode] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState('');

  const handleClick = () => {
    setExplode(true);
    setTimeout(() => {
      setExplode(false);
      setShowQuote(true);
      setRandomQuote();
      setTimeout(() => {
        setShowQuote(false);
      }, 3000);
    }, 800);


  const setRandomQuote = () => {
    const quotes = [
      "Er que asno va a Roma, güerve a su quiasa hecho un furro",
      "Er que muncho s'amaga, er culo se le ve",
      "Er que se cae a la cieca, a una cepa s'agarra",
      "Qu'eche azaite un generoso, y'er vinagre un roñoso",
      "Va dar esto un esclavejío",
      "Calla que me da un paparajote ",
      "Tienes el muelle flojo, demasiado zarangollo",
      "Te la están metiendo por la retambufla",
      "Déjame una miaja, ejraciao, que estoy traspillao ",
      "¡Acho, pijo!",
      "Ponme una bicicleta con la caña",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };  


  };

  


  return (
    <div>
        {showQuote && <div className="quote">{quote}</div>}
    <div className='lemon-button'>
    
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
    </div>
  );
};

export default ExplosionButton;
