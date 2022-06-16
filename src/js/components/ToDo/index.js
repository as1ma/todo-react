function ToDo({ name, done, index, toggleToDo }) {
  const id = `todo-${index}`;

  function handleChange(event) {
    let { index } = event.target.dataset;
    if (!index) return;

    index = Number(index);
    toggleToDo(index);
  }

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        data-index={index}
        checked={done}
        onChange={handleChange}
      />
      <label htmlFor={id}>{name}</label>
    </li>
  );
}

export default ToDo;
