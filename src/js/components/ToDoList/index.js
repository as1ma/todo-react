import ToDo from "../ToDo";
import "./index.css";

function ToDoList({ toDos, toggleToDo }) {
  return (
    <ul role="list">
      {toDos.map((toDo, index) => (
        <ToDo {...toDo} index={index} key={index} toggleToDo={toggleToDo} />
      ))}
    </ul>
  );
}

export default ToDoList;
