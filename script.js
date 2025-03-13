try {
  import React from "https://esm.sh/react";
} catch (e) {
  console.error("Error importing React:", e);
}

try {
  import ReactDOM from "https://esm.sh/react-dom/client";
} catch (e) {
  console.error("Error importing ReactDOM:", e);
}

try {
  import { marked } from "https://esm.sh/marked";
} catch (e) {
  console.error("Error importing marked:", e);
}

try {
  import DOMPurify from "https://esm.sh/dompurify";
} catch (e) {
  console.error("Error importing DOMPurify:", e);
}

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
