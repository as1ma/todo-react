export default function ToDo({ toDo, index }) {
  const id = `todo-${index}`;

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        data-index={index}
        defaultChecked={toDo.done}
      />
      <label htmlFor={id}>{toDo.name}</label>
    </li>
  );
}
