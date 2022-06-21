import "./index.css";

function ToDo({ name, done, index, toggleToDo, deleteToDo }) {
  const id = `todo-${index}`;

  function handleChange(event) {
    let { index } = event.target.closest("li").dataset;
    if (!index) return;

    index = Number(index);
    toggleToDo(index);
  }

  function handleClick(event) {
    let { name, index } = event.target.closest("li").dataset;
    if (!name || !index) return;

    index = Number(index);

    const message = `Are you sure you want to delete '${name}'?`;
    const confirmDelete = window.confirm(message);
    if (!confirmDelete) return;

    deleteToDo(index);
  }

  return (
    <li data-name={name} data-index={index}>
      <input type="checkbox" id={id} checked={done} onChange={handleChange} />
      <label htmlFor={id}>{name}</label>
      <button
        data-action="delete"
        aria-label={`Delete '${name}'`}
        onClick={handleClick}
      >
        Delete
      </button>
    </li>
  );
}

export default ToDo;
