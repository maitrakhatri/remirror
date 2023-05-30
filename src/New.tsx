import React, { useState } from "react";
import { Remirror, ThemeProvider, useRemirror } from "@remirror/react";
import {
  BoldExtension,
  ItalicExtension,
  UnderlineExtension,
} from "remirror/extensions";
import { Toolbar } from "@remirror/react";

const extensions = () => [
  new BoldExtension(),
  new ItalicExtension(),
  new UnderlineExtension(),
];

const Editor = () => {
  const { manager, state, onChange } = useRemirror({
    extensions,
    stringHandler: "html",
  });
  const [content, setContent] = useState("");

  const handleSave = () => {
    setContent(state.toString());
  };

  return (
    <>
      <Toolbar />
      <Remirror
        manager={manager}
        initialContent={content}
        onChange={onChange}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );
};

const New = () => {
  return (
    <ThemeProvider>
      <Editor />
    </ThemeProvider>
  );
};

export default New;
