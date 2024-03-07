import { useState } from "react";

function TextEditor({ originalText, UpdateApiCall, cancel }) {
  const [text, setText] = useState(originalText);

  const handleChange = (event) => {
    const val = event.target.value;
    setText(val);
  };

  const save = (event) => {
    event.preventDefault();

    UpdateApiCall(text);
    cancel();
  };

  return (
    <div>
      <label>
        Editing:
        <textarea type="text" value={text} onChange={handleChange}></textarea>
      </label>
      <button onClick={save} className="btn btn-primary my-3 mr-4">
        Save changes
      </button>
      <button onClick={() => cancel()} className="btn btn-secondary my-3">
        Cancel
      </button>
    </div>
  );
}

export default TextEditor;
