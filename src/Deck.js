import {CardDeck, Card} from 'react-bootstrap'; 
import ESLCard from './ESLCard'


const Deck = (props) => {
    const cards = props.cards

    // const cardInfo = [
    //     {image: "", name: "first card", text: "blah", setname: "blue", type:"fire"},
    //     {image: "", name: "second card", text: "blah", setname: "red", type:"fire"},
    //     {image: "", name: "third card", text: "blah", setname: "red", type:"earth"},
    //     {image: "", name: "fourth card", text: "blah", setname: "green but like a very very very specific light green that's almost apple or grass with a middling amount of yellow", type:"earth"},
    //     {image: "", name: "fifth card", text: "blah", setname: "yellow", type:"air"}
    // ];

    const renderCard = (card, index) => {
        return(
            <Card border="secondary" style={{ width: '18rem', textAlign:'left' }} key={index} >
                <Card.Img variant="top" src={card.imageUrl}/>
                <Card.Body>
                    {/* <Card.Title>{card.name}</Card.Title> */}
                    <Card.Text>
                        <ul>
                            <li><strong>Name:</strong> {card.name}</li>
                            <li><strong>Text:</strong> {card.text}</li>
                            <li><strong>Set Name:</strong> {card.set.name}</li>
                            <li><strong>Type:</strong> {card.type}</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
            </Card>
        )
    };

return (
    <CardDeck class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        {cards.map(renderCard)}
    </CardDeck>
    )
}

export default Deck;