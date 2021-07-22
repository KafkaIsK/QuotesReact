import React from 'react'

function Quote({ quote }) {
    return (
        <div className="quote">
            <div className="tags" title={quote.tags.filter(item => item).join(', ')}>{quote.tags.filter(item => item).join(', ')}</div>
            <blockquote>
                {quote.content}
            </blockquote>
            <div className="author" title={quote.author}>{quote.author}</div>
        </div>
    )
}

export default Quote
