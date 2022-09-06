import ToDo from "../ToDo/ToDo.js";

function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  return (
    <ul role="list">
      {toDos.map((toDo) => (
        <ToDo
          {...toDo}
          key={toDo.id}
          toggleToDo={toggleToDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;