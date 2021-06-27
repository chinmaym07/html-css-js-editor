import SplitPane from "react-split-pane";
import React, { useState, useEffect } from "react";
import { CssEditor, HtmlEditor, JavascriptEditor } from "./Editor";

const SplitEditor = () => {
  const [widthValue, setWidthValue] = useState("300px");
  const [htmlValue, setHtmlValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [theme,setTheme] = useState("monokai");
  
  const handleRun = () => {
    const output = `
    <html>
        <head>
            <style>
            ${cssValue}
            </style>
        </head>
        <body>
            ${htmlValue}
            <script>
            ${jsValue}
            </script>
        </body>
    </html>`;
    setOutputValue(output);
  }
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  }

  return (
      <div>
        <div className="header">
            <button className="run" onClick={handleRun}>Run</button>
            <select value={theme} onChange={handleThemeChange} className="select-dropdown">
                <option value="monokai">monokai</option>
                <option value="github">github</option>
                <option value="terminal">terminal</option>
                <option value="dracula">dracula</option>
                <option value="solarized_light">solarized light</option>
                <option value="solarized_dark">solarized dark</option>
                <option value="twilight">twilight</option>
            </select>
        </div>
        <SplitPane
        split="vertical"
        minSize="40%"
        onDragFinished={(width) => {
            setWidthValue(`${width}px`);
        }}
        >
        <SplitPane split="vertical" minSize="100%">
            <div>
            <HtmlEditor
                value={htmlValue}
                width={widthValue}
                handleChange={setHtmlValue}
                theme={theme}
            />
            <CssEditor
                value={cssValue}
                width={widthValue}
                handleChange={setCssValue}
                theme={theme}
            />
            <JavascriptEditor
                value={jsValue}
                width={widthValue}
                handleChange={setJsValue}
                theme={theme}
            />
            </div>
        </SplitPane>
        <div className="preview-block">
            <h2>Preview Block</h2>
            <iframe
                srcdoc={outputValue}
                className="previewIframe"
                title="Preview"
            />
        </div>
        </SplitPane>
    </div>
  );
};

export default SplitEditor;
