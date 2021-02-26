import React from 'react'

function Result({ result: { url, title, objectId } }) {
    return(
        <div id="result" key={objectId}>
            <a href={url} >
                <strong>{title}</strong>
            </a>
        </div>
    )
}

export default function ResultsList({ 
    searchResult, 
}) {
    return (
        <div id="resultsList">
            { searchResult.length > 0 ? searchResult.map(result => <Result result={result} /> ) : "" }
        </div>
    )
}
