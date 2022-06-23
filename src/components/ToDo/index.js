import "./index.css";

function ToDo({ name, done, index, ...props }) {
  const id = `todo-${index}`;

  function toggleToDo() {
    props.toggleToDo(index);
  }

  function deleteToDo() {
    const message = `Are you sure you want to delete '${name}'?`;

    const confirmDelete = window.confirm(message);
    if (!confirmDelete) return;

    props.deleteToDo(index);
  }

  return (
    <li>
      <input id={id} type="checkbox" checked={done} onChange={toggleToDo} />
      <label htmlFor={id}>{name}</label>
      <button
        type="button"
        data-action="delete"
        aria-label={`Delete '${name}'`}
        onClick={deleteToDo}
      >
        Delete
      </button>
    </li>
  );
}

export default ToDo;
