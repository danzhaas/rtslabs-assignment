import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectHistory, addSearch } from './HistorySlice';
import axios from 'axios'

export default function SearchBar({ 
    updateResult 
    // updateLoading 
}) {
    const history = useSelector(selectHistory);
    const dispatch = useDispatch();

    // useEffect(() => {

    // }, [history])

    async function submitSearch (e) {
        e.preventDefault();
        const queryInput = document.querySelector('#queryInput').value;
        // updateLoading(true);
        const res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${queryInput}`);
        updateResult(res.data.hits);
        dispatch(addSearch({queryInput}));
    }

    return (
        <form id="searchbar">
            <input type="text" id="queryInput" name="queryInput" ></input>
            <p>History: {history.length > 0 ? <span>history.length</span> : <span>No history</span>}</p>
            <input type="submit" value="Submit" onClick={ (e) => submitSearch(e) } ></input>
        </form>
    )
}
