import './App.css';
import { useState, useRef, useCallback } from 'react';
import CardList from './Components/CardList';
import Navigation from './Components/Navigation';
import Deck from './Components/Deck';

function App() {
  
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { 
    loading, 
    error, 
    cards, 
    hasMore } = CardList(query, pageNumber)

    // Trigger infinite scroll when last card in set viewed on screen
    const observer = useRef();
    const lastCardElementRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    }, [loading, hasMore])
    
    // Search by user input, reset page number so all results displayed from page 1
    function handleSearch(e) {
      setQuery(e.target.value);
      setPageNumber(1);
    }

  return (
    <div className="App bg-image">
      <header className="App-header">
        <Navigation handleSearch={handleSearch} query={query}/>
      </header>
      <main>
        <Deck cards={cards} lastCardElementRef={lastCardElementRef}/>
        <h3 className="message">{loading && 'Loading...'}</h3>
        <h3 className="message">{cards.length === 0 && !loading &&  'No results found' } </h3>
        <h3 className="message">{error && 'Error'}</h3>
      </main>
    </div>
  );
}

export default App;
