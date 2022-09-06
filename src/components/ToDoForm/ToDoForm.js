import { useState } from "react";
import PropTypes from "prop-types";
import * as styles from "./ToDoForm.module.css";

function ToDoForm({ addToDo }) {
  const inputId = "to-do";
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedValue = value.trim();
    if (!trimmedValue) return;

    addToDo(trimmedValue);
    setValue("");
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label className={styles.label} htmlFor={inputId}>
          What do you need to do?
        </label>
        <input
          required
          id={inputId}
          className={styles.input}
          type="text"
          value={value}
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit">Add to-do</button>
      </p>
    </form>
  );
}

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default ToDoForm;
