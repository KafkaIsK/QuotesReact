import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';

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

      <button onClick={generate}>Generate New Quote</button>
    </div>
  );
}

export default App;
