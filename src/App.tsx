import "./App.css";
import { useCallback, useState } from "react";
import type { RemirrorJSON } from "remirror";
import { OnChangeJSON } from "@remirror/react";
import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";

function App() {
  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    localStorage.setItem("remirror", JSON.stringify(json));
  }, []);

  const [initialContent, setInitialContent] = useState<
    RemirrorJSON | undefined
  >(JSON.parse(localStorage.getItem("remirror")!));

  document.title = "WysiwygEditor";

  return (
    <div className="App">
      <MyEditor onChange={handleEditorChange} initialContent={initialContent} />
    </div>
  );
}

interface MyEditorProps {
  onChange: (json: RemirrorJSON) => void;
  initialContent?: RemirrorJSON;
}

const MyEditor: React.FC<MyEditorProps> = ({ onChange, initialContent }) => {
  return (
    <div style={{ padding: 16 }}>
      <h1>WYSIWYG Editor</h1>
      <WysiwygEditor
        placeholder="Enter text..."
        initialContent={initialContent}
      >
        <OnChangeJSON onChange={onChange} />
      </WysiwygEditor>
    </div>
  );
};

export default App;
