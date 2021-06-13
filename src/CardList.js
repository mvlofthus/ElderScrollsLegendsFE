import axios from 'axios';
import { useState, useEffect } from 'react';

const CardList = (props) => {
    const query = props.query;
    const pageNumber = props.pageNumber;

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

        let cancel 
        axios.get(`https://api.elderscrollslegends.io/v1/cards?pageSize=20&name=${query}&page=${pageNumber}`, 
        {cancelToken: new axios.CancelToken(c => cancel =c)}
        )
        .then((response) => {
            const list = response.data.cards;
            console.log(list)
            setCards((prevCards) => {
                return[...prevCards, list]
            });
            setHasMore(response.data.cards.length > 0);
            setLoading(false);
        })
        .catch((error) => { 
            if (axios.isCancel(error)) return
            setError(error.message);
        })
        return () => cancel()
    }, [query, pageNumber])

    return { loading, error, cards, hasMore };
};


export default CardList; 