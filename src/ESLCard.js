import {Card} from 'react-bootstrap'; 

const ESLCard = (props) => {
    const index = props.index
    const card = props.card
    
    return (
        <Card border="secondary" style={{ textAlign:'left' }} key={index}>
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
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    )
}

export default ESLCard;