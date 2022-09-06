import { useState } from "react";
import * as styles from "./ToDoForm.module.css";

function ToDoForm({ addToDo }) {
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label className={styles.label} htmlFor={inputId}>
          What do you need to do?
        </label>
        <input
          id={inputId}
          className={styles.input}
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

export default ToDoForm;
