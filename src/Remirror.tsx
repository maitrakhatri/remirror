import {
  BoldExtension,
  CalloutExtension,
  ItalicExtension,
  BlockquoteExtension,
  CodeExtension,
} from "remirror/extensions";
import { useRemirror, Remirror, EditorComponent } from "@remirror/react";
import "remirror/styles/all.css";

export default function RemirrorEditor() {
  const { manager } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new BlockquoteExtension(),
      new CodeExtension(),
      new CalloutExtension({ defaultType: "warn" }), // Override defaultType: 'info'
    ],
    content: "<p> Initial Content </p>",
    stringHandler: "html",
  });

  return (
    <div className="remirror-theme">
      <Remirror manager={manager}>
        <EditorComponent />
      </Remirror>
    </div>
  );
}
