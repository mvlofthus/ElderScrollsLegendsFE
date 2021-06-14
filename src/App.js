import './App.css';
import Deck from './Deck';
import { Container, InputGroup, FormControl, Col, CardDeck, Navbar, Row, Form, Nav } from 'react-bootstrap';
import { useState, useRef, useCallback } from 'react';
import CardList from './CardList';
import ESLCard from './ESLCard';

function App() {
  
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { 
    loading, 
    error, 
    cards, 
    hasMore } = CardList(query, pageNumber)

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
    
    function handleSearch(e) {
      setQuery(e.target.value);
      setPageNumber(1);
    }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar fixed='top' bg='dark' variant='dark'>
          <Navbar.Brand>Cards of Elder Scrolls Legends</Navbar.Brand>
          <Nav className="ml-auto">
            <Form className="d-flex">
              <FormControl
                placeholder="Search by Card Name"
                aria-label="Search by Card Name"
                aria-describedby="basic-addon1"
                value={query}
                onChange={handleSearch}
              />
            </Form>  
          </Nav>
      </Navbar>
      </header>
      <main>
          <Container class="Card-deck"> 
            <CardDeck className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {cards.map((card, index) => {
              if (cards.length === index + 1) {
                  return <div ref={lastCardElementRef} key={index}>
                  <ESLCard card={card} index={index}/></div>
              } else {
                return <div key={index}><ESLCard card={card} index={index}/></div>
              }
            })}
          </CardDeck>
        </Container>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </main>
    </div>
  );
}

export default App;
