import React from 'react'

function Result({ result: { url, title } }) {
        return(
        <div id="result">
            <a href={url} >
                <strong>{title}</strong>
            </a>
            <p></p>
        </div>
    )
}

export default function ResultsList({ 
    searchResult, 
    // loadingStatus 
}) {
    return (
        <div id="resultslist">
            { searchResult.length > 0 ? searchResult.map(result => <Result result={result} /> ) : "" }
            {/* { loadingStatus && searchResult.length > 0 ? searchResult.map(result => <Result result={result} /> ) : "" } */}
        </div>
    )
}
