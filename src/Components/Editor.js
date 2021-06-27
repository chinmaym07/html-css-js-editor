import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import 'ace-builds/src-noconflict/theme-twilight';
import "../styles/editor.css";

export const JavascriptEditor = (props) => {
  return (
    <Editor
      mode="javascript"
      title={"JS"}
      {...props}
    />
  );
};

export const HtmlEditor = (props) => {
  return (
    <Editor
      mode="html"
      title={"HTML"}
      {...props}
    />
  );
};

export const CssEditor = (props) => {
  return (
    <Editor
      mode="css"
      title={"CSS"}
      {...props}
    />
  );
};

const Editor = ({ mode, title, handleChange, value, width,theme }) => {
  return (
    <div className="editorContainer">
      <div className="editorTitle">{title}</div>
      <AceEditor
        mode={mode}
        theme={theme}
        name={title}
        fontSize={18}
        width={"100%"}
        showPrintMargin={true}
        showGutter={true}
        tabSize={2}
        height="300px"
        onChange={handleChange}
        setOptions={{
          useWorker: false,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={value}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};
