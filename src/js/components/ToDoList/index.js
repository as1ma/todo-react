import ToDo from "../ToDo";
import "./index.css";

export default function ToDoList({ toDos, toggleToDo }) {
  function handleChange(event) {
    let { index } = event.target.dataset;
    if (!index) return;

    index = Number(index);
    toggleToDo(index);
  }

  return (
    <ul role="list" onChange={handleChange}>
      {toDos.map((toDo, index) => (
        <ToDo toDo={toDo} index={index} key={index} />
      ))}
    </ul>
  );
}
