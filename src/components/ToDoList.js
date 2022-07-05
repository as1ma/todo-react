import ToDo from "./ToDo";
import "../styles/ToDoList.css";

function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  return (
    <ul className="toDoList" role="list">
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
