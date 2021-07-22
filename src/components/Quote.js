import React from 'react'

function filterTags(tagsArray) {
    if (tagsArray === undefined || tagsArray === null) {
        // checks if undefined
    } else {
        const separate = tagsArray.filter(item => item).join(', ');    
        return separate
    }
}

function Quote({ quote }) {
    return (
        <div className="quote">
            <div className="tags" title={filterTags(quote.tags)}>{filterTags(quote.tags)}</div>
            <blockquote>
                {quote.content}
            </blockquote>
            <div className="author" title={quote.author}>{quote.author}</div>
        </div>
    )
}

export default Quote
