import "./index.css";

function Form({ addToDo }) {
  const inputId = "to-do";

  function handleSubmit(event) {
    event.preventDefault();

    const input = event.target.elements[inputId];

    const value = input.value.trim();
    if (!value) return;

    addToDo(value);
    input.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor={inputId}>What do you need to do?</label>
        <input id={inputId} type="text" required />
      </p>
      <p>
        <button type="submit">Add to-do</button>
      </p>
    </form>
  );
}

export default Form;
