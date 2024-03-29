import PropTypes from "prop-types";
import * as styles from "./ToDo.module.css";

function ToDo({ id, name, done, ...props }) {
  function toggleToDo() {
    props.toggleToDo(id);
  }

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
        onChange={toggleToDo}
      />
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
      <button
        className={styles.button}
        type="button"
        aria-label={`Delete '${name}'`}
        onClick={deleteToDo}
      >
        Delete
      </button>
    </li>
  );
}

ToDo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  toggleToDo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDo;
