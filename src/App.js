import logo from './logo.svg';
import './App.css';
import Deck from './Deck';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react';
import CardList from './CardList';

function App() {
  
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  // const observer = useRef();
  // const lastCardElementRef = useCallback();
    
  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  // const { loading, error, cards, hasMore } = CardList(query, pageNumber)
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [hasMore, setHasMore] = useState(false)
  
  useEffect(() => {
      setCards([])
  }, [query]
  )

  useEffect(() => {
      setLoading(true);
      setError(false);

      axios.get(`https://api.elderscrollslegends.io/v1/cards?pageSize=20&name=${query}`
      )
      .then((response) => {
          const list = response.data.cards;
          console.log(list);
          setCards(list);
          setHasMore(response.data.cards.length > 0);
          setLoading(false);
      })
      .catch((error) => { 
          if (axios.isCancel(error)) return
          setError(error.message);
      })
    }, [query]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type='text' value={query} onChange={handleSearch}></input>
      </header>
      <main>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
        <Container>
          <Deck cards={cards}/>
        </Container>
      </main>
    </div>
  );
}

export default App;
