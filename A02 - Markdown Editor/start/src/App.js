import React, { useState } from 'react';
import marked from "marked";
import ReactMarkdown from 'react-markdown'
import './App.css';

export default function App() {

  const [markdown, setMarkdown] = useState('# sup');

  return (
    <div className="app">
      <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} />

      {/* <div className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} /> */}

      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
