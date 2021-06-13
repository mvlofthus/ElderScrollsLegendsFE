import {Card} from 'react-bootstrap'; 

const ESLCard = (props) => {
    const index = props.index
    const card = props.card
    
    return (
        <Card border="secondary" style={{ width: '18rem' }} key={index} >
            <Card.Img variant="top" src={card.image}/>
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}

export default ESLCard;