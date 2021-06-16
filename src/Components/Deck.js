import { Container, CardGroup } from 'react-bootstrap';
import ESLCard from './ESLCard';

const Deck = (props) => {
    return (
        <Container className="Card-deck"> 
            <CardGroup className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                {props.cards.map((card, index) => {
                    if (props.cards.length === index + 1) {
                        return <div ref={props.lastCardElementRef} key={index}>
                        <ESLCard card={card} index={index}/></div>
                    } else {
                    return <div key={index}><ESLCard card={card} index={index}/></div>
                }
                })}
            </CardGroup>
        </Container>
    )
}

export default Deck;