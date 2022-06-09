import Form from "../Form";
import ToDoList from "../ToDoList";

export default function App({ toDos }) {
  const prompt = (
    <p>
      <em>Add some to-dos...</em>
    </p>
  );

  return (
    <>
      <Form numToDos={toDos.length} />
      {toDos.length > 1 ? <ToDoList toDos={toDos} /> : prompt}
    </>
  );
}
