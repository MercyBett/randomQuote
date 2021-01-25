import { useState, useEffect } from 'react';

function App() {

  const {quote, setQuote}=useState("");
  const {author,setAuthor}=useState("");
  
  // useEffect(() => {
    
  // }, [input])
  return (
    <div className="quote-box">
    <p className="text">My Quote</p>
    <small className="author">-Author-</small><br/>
    <button className="new-quote">New Quote</button>
    </div>
  );
}

export default App;
