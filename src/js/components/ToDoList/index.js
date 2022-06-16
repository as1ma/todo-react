import ToDo from "../ToDo";
import "./index.css";

export default function ToDoList({ toDos, toggleToDo }) {
  return (
    <ul role="list">
      {toDos.map((toDo, index) => (
        <ToDo toDo={toDo} index={index} key={index} toggleToDo={toggleToDo} />
      ))}
    </ul>
  );
}
