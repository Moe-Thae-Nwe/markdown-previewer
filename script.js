import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
import { marked } from "https://esm.sh/marked";
import DOMPurify from "https://esm.sh/dompurify";

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
  const [text, setText] = React.useState(marked.parse(placeholderText))
  function handleChange(event) {
    let inputValue = marked.parse(event.target.value)
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
