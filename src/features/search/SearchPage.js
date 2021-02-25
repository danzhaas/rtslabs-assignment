import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

export default function SearchPage() {
    const [ searchResult, updateResult ] = useState("");
    // const [ loadingStatus, updateLoading ] = useState(false)

    return (
        <div>
            <header>
                <div id="brand">
                    <i>Dan's HN Search</i>
                </div>
                <SearchBar 
                    updateResult={updateResult} 
                    // updateLoading={updateLoading} 
                />
            </header>
            <ResultsList 
                searchResult={searchResult} 
                // loadingStatus={loadingStatus} 
            />
        </div>
    )
}
