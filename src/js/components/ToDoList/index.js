import ToDo from "../ToDo";
import "./index.css";

function ToDoList({ toDos, toggleToDo }) {
  const listItems = toDos.map((toDo, index) => (
    <ToDo {...toDo} index={index} key={index} toggleToDo={toggleToDo} />
  ));

  return <ul role="list">{listItems}</ul>;
}

export default ToDoList;
