const { useState } = React;
const { createRoot } = ReactDOM;
const { marked } = window;
const DOMPurify = window.DOMPurify;

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
**bolded text**`;

marked.use({
  gfm: true,
  breaks: true
});

function App() {
  const [text, setText] = useState(DOMPurify.sanitize(marked.parse(placeholderText)));
  function handleChange(event) {
    let inputValue = DOMPurify.sanitize(marked.parse(event.target.value));
    setText(inputValue);
    console.log(text);
  }

  return (
    <div>
      <textarea id="editor" onChange={handleChange}>{placeholderText}</textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
