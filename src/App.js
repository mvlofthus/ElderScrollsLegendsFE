import logo from './logo.svg';
import './App.css';
import Deck from './Deck';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [errorMessage, setErrorMessage] = useState('');

    // Cards
    const [cards, setCards] = useState([]);
    const [loadStatus, setLoadStatus] = useState(false)

    
    useEffect(() => {
        axios.get('https://api.elderscrollslegends.io/v1/cards')
        .then((response) => {
        const list = response.data.cards;
        setCards(list);
        setLoadStatus(true);
        })
        .catch((error) => { 
        setErrorMessage(error.message);
        })
    }, [])

    
  
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
      </header>
      <main>
        <Container>
          <Deck cards={cards}/>
        </Container>
      </main>
    </div>
  );
}

export default App;
