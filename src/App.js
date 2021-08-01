import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  });

  // const fetchQuote = async () => {
  //   return await fetch('https://animechan.vercel.app/api/random')
  //     .then(response => response.json());
  // }
  const fetchQuote = async () => {
    return await fetch('https://api.quotable.io/random')
      .then(response => response.json());
  }

  const generate = async () => {
    setQuote(await fetchQuote());
  }

  // eslint-disable-next-line
  useEffect(async () => {
    setQuote(await fetchQuote());
  }, []);

  return (
    <div className="App">
      <Quote quote={quote} />

      <div className="buttons">
        <button onClick={generate}>Generate New Quote</button>
        <button className="tweet" onClick="">
          <a href={`https://twitter.com/intent/tweet?text=${quote.content}--${quote.author}`}><FontAwesomeIcon className="twitter" icon={faTwitter} /></a>
        </button>
      </div>
    </div>
  );
}

export default App;
