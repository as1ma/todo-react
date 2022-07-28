import "../styles/ToDo.css";

function ToDo({ id, name, done, ...props }) {
  function deleteToDo() {
    const message = `Are you sure you want to delete '${name}'?`;

    const confirmDelete = window.confirm(message);
    if (!confirmDelete) return;

    props.deleteToDo(id);
  }

  return (
    <li className="toDo">
      <input
        id={id}
        type="checkbox"
        checked={done}
        onChange={() => void props.toggleToDo(id)}
      />
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
