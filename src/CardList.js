import axios from 'axios';
import { useState, useEffect } from 'react';

const CardList = () => {
    const [errorMessage, setErrorMessage] = useState('');

    // Cards
    const [cards, setCards] = useState([]);

    
    useEffect(() => {
        axios.get('https://api.elderscrollslegends.io/v1/cards')
        .then((response) => {
        console.log(response);
        const list = response.data.cards;
        setCards(list);
        })
        .catch((error) => { 
        setErrorMessage(error.message);
        })
    }, [])
    return (cards) 
}

export default CardList; 