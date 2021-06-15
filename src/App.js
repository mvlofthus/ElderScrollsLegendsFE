import './App.css';
import logo from './eslLogo.png' ;
import { Container, FormControl, Navbar, Form, Nav, CardGroup } from 'react-bootstrap';
import { useState, useRef, useCallback } from 'react';
import CardList from './Components/CardList';
import ESLCard from './Components/ESLCard';

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
        <Navbar fixed='top'  variant='dark' className="nav-bar">
          <Navbar.Brand>
            <img
              src={logo}
              height="50"
              className="d-inline-block align-middle"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Form className="d-flex">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                value={query}
                onChange={handleSearch}
              />
            </Form>  
          </Nav>
        </Navbar>
      </header>
      <main>
          <Container className="Card-deck"> 
            <CardGroup className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {cards.map((card, index) => {
              if (cards.length === index + 1) {
                  return <div ref={lastCardElementRef} key={index}>
                  <ESLCard card={card} index={index}/></div>
              } else {
                return <div key={index}><ESLCard card={card} index={index}/></div>
              }
            })}
          </CardGroup>
        </Container>
        <p className="message">{loading && <strong>Loading...</strong>}</p>
        <p className="message">{error && <strong>Error</strong>}</p>
      </main>
    </div>
  );
}

export default App;
