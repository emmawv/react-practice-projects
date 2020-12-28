import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.css'

export default function Markdown() {

    const [markdown, setMarkdown] = useState('Write something here...')

    const handleInputChange = e => setMarkdown(e.target.value)

    return (
        <div className="app">
            <textarea value={markdown} onChange={handleInputChange}/>

            <ReactMarkdown className='preview'>{markdown}</ReactMarkdown>
        </div>
    );
}
