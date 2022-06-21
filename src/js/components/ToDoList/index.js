import ToDo from "../ToDo";
import "./index.css";

function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  const listItems = toDos.map((toDo, index) => (
    <ToDo
      {...toDo}
      index={index}
      key={index}
      toggleToDo={toggleToDo}
      deleteToDo={deleteToDo}
    />
  ));

  return <ul role="list">{listItems}</ul>;
}

export default ToDoList;
