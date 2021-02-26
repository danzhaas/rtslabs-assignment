import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

export default function SearchPage() {
    const [ searchResult, updateResult ] = useState("");

    return (
        <div>
            <header>
                <div id="brand">
                    <i>Dan's HackerNews Algolia Search</i>
                </div>
                <SearchBar 
                    updateResult={updateResult} 
                />
            </header>
            <ResultsList 
                searchResult={searchResult} 
            />
        </div>
    )
}
