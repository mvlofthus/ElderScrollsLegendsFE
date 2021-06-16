import axios from 'axios';
import { useState, useEffect } from 'react';

function CardList(query, pageNumber) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState([]);
    const [hasMore, setHasMore] = useState(false)
    
    useEffect(() => {
        setCards([])
    }, [query]
    )

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel; 

        axios({
            method: 'GET',
            url: `https://api.elderscrollslegends.io/v1/cards?pageSize=20&name=${query}&page=${pageNumber}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then((response) => {
            setCards(prevList => {
                return [...prevList, ...response.data.cards]
            });
            setHasMore(response.data.cards.length > 0);
            setLoading(false);
        })
        .catch((error) => { 
            if (axios.isCancel(error)) return
            setError(true);
            console.log(error.message);
        })
        return () => cancel();
        }, [query, pageNumber]);

    return { loading, error, cards, hasMore };
};

export default CardList; 