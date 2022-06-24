import ToDo from "../ToDo";
import "./index.css";

function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  return (
    <ul role="list">
      {toDos.map((toDo, index) => (
        <ToDo
          {...toDo}
          index={index}
          key={index}
          toggleToDo={toggleToDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
