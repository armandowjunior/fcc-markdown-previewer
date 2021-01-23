import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

function App() {
  const [markup, setMarkup] = useState(placeholder);

  const handleChange = event => {
    setMarkup(event.target.value);
  };

  const getMarkdownText = () => {
    let rawMarkup = marked(markup, { breaks: true });
    return {__html: rawMarkup};
  }

  return (
    <div className="App">
      <div id="wrapper-header">
        <h1 id="editor-header">Editor</h1>
        <h1 id="preview-header">Previewer</h1>
      </div>

      <div id="wrapper-input">
        <textarea 
          id="editor"
          value={markup}
          onChange={handleChange}
        ></textarea>

        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
    </div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://colorfield.be/sites/default/files/styles/large/public/2017-05/react-logo_1.png?itok=0YyWmwz-)
`;

export default App;
