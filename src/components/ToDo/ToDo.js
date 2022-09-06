import * as styles from "./ToDo.module.css";

function ToDo({ id, name, done, ...props }) {
  function deleteToDo() {
    const message = `Are you sure you want to delete '${name}'?`;

    const confirmDelete = window.confirm(message);
    if (!confirmDelete) return;

    props.deleteToDo(id);
  }

  return (
    <li className={styles.li}>
      <input
        id={id}
        className={styles.checkbox}
        type="checkbox"
        checked={done}
        onChange={() => void props.toggleToDo(id)}
      />
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
      <button
        className={styles.button}
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