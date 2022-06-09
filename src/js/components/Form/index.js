import "./index.css";

export default function Form({ numToDos = 0 }) {
  const inputId = "to-do";

  const clearButton = <button type="button">Clear list</button>;

  return (
    <form>
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
