import React from 'react'
import { useDispatch } from 'react-redux';
import { addSearch } from './HistorySlice';
import axios from 'axios'


export default function SearchBar({ 
    updateResult 
}) {
    const dispatch = useDispatch();

    async function submitSearch (e) {
        e.preventDefault();
        const queryInput = document.querySelector('#queryInput').value;
        const res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${queryInput}`);
        updateResult(res.data.hits);
        dispatch(addSearch(queryInput));
    }

    return (
        <form id="searchbar">
            <input type="text" id="queryInput" name="queryInput" placeholder="Search" ></input>
            <input type="submit" value="Submit" onClick={ (e) => submitSearch(e) } ></input>
        </form>
    )
}
