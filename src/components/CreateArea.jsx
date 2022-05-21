import React from "react";
import { isPropertySignature } from "typescript";
import Note from "./Note";
function CreateArea(props) {
  const [text, setText] = React.useState({ title: "", content: "" });
  function getText(event) {
    const val = event.target.value;
    const name = event.target.name;
    setText((prev) => {
      if (name == "title") {
        return {
          title: val,
          content: prev.content,
        };
      } else {
        return {
          title: prev.title,
          content: val,
        };
      }
    });
  }
  function onAdd(event) {
    event.preventDefault();
    props.onCall(text);
    setText({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          onChange={getText}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          name="content"
          value={text.content}
          onChange={getText}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
