import { useState } from "react";
import "../styles/Form.css";

function Form({ addToDo }) {
  const inputId = "to-do";
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim()) addToDo(name);
    setName("");
  }

  function handleInput(event) {
    setName(event.target.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>
        <label htmlFor={inputId}>What do you need to do?</label>
        <input
          id={inputId}
          type="text"
          value={name}
          onInput={handleInput}
          required
        />
      </p>
      <p>
        <button type="submit">Add to-do</button>
      </p>
    </form>
  );
}

export default Form;
