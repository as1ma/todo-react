import "./index.css";

export default function ToDoList({ toDos }) {
  return (
    <ul role="list">
      {toDos.map((toDo, index) => {
        const id = `todo-${index}`;

        return (
          <li key={index}>
            <input
              type="checkbox"
              id={id}
              data-index="${index}"
              checked={toDo.done}
            />
            <label htmlFor={id}>{toDo.name}</label>
          </li>
        );
      })}
    </ul>
  );
}
