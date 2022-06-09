import "./index.css";

export default function Form({ numToDos = 0, addToDo, clearToDos }) {
  const inputId = "to-do";

  const clearButton = (
    <button type="button" onClick={handleClick}>
      Clear list
    </button>
  );

  function handleSubmit(event) {
    event.preventDefault();

    const input = event.target.elements[inputId];

    const value = input.value.trim();
    if (!value) return;

    addToDo(value);
    input.value = "";
  }

  function handleClick() {
    const message = "Are you sure you want to clear your to-do list?";

    const confirmClear = window.confirm(message);
    if (!confirmClear) return;

    clearToDos();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor={inputId}>What do you need to do?</label>
        <input id={inputId} type="text" required />
      </p>
      <p>
        <button type="submit">Add to-do</button>
        {numToDos > 0 && clearButton}
      </p>
    </form>
  );
}
