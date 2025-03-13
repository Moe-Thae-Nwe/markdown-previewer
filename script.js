import React from "https://unpkg.com/react@17/umd/react.production.min.js"
import ReactDOM from "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
import {marked} from "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify@2.2.6/dist/purify.min.js"

let placeholderText = `# Header 

## Sub header

[a link](https://www.example.com)
\`inline code\` 
\`\`\`
a code block
\`\`\` 
- a list item 
> a blockquote 
![an image](image.jpg)
**bolded text**`

marked.use({
  gfm: true,
  breaks: true
})

function App() {
  const [text, setText] = React.useState(DOMPurify.sanitize(marked.parse(placeholderText)))
  function handleChange(event) {
    let inputValue = DOMPurify.sanitize(marked.parse(event.target.value))
    setText(inputValue)
    console.log(text)
  }
  
  return(
    <div>
      <textarea id = "editor" onChange = {handleChange}>{placeholderText}</textarea>
      <div id = "preview" dangerouslySetInnerHTML = {{__html: text}}></div>
   </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
