import {Card} from 'react-bootstrap'; 

const ESLCard = (props) => {
    const index = props.index
    const card = props.card
    
    return (
        <Card  bg='light' text='dark' style={{ textAlign:'left' }} key={index} className='mt-3 card h-100'>
        <Card.Img variant="top" src={card.imageUrl}/>
        <Card.Body>
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
}

export default ESLCard;