import "../styles/Form.css";

function Form({ addToDo }) {
  const inputId = "to-do";

  function handleSubmit(event) {
    event.preventDefault();

    const input = event.target.elements[inputId];
    if (!input) return;

    const value = input.value.trim();
    if (!value) return;

    addToDo(value);
    input.value = "";
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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
