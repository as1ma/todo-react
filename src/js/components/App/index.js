import { useState, useEffect } from "react";
import { setStorage } from "../../storage";
import Form from "../Form";
import ToDoList from "../ToDoList";

export default function App(props) {
  const [toDos, setToDos] = useState(props.toDos);

  const prompt = (
    <p>
      <em>Add some to-dos...</em>
    </p>
  );

  function addToDo(value) {
    const toDo = { name: value, done: false };
    setToDos([...toDos, toDo]);
  }

  function toggleToDo(index) {
    const updatedToDos = toDos.map((toDo, i) => {
      if (i !== index) return toDo;
      return { ...toDo, done: !toDo.done };
    });

    setToDos(updatedToDos);
  }

  function clearToDos() {
    setToDos([]);
  }

  useEffect(() => {
    setStorage(toDos);
  }, [toDos]);

  return (
    <>
      <Form numToDos={toDos.length} addToDo={addToDo} clearToDos={clearToDos} />
      {toDos.length > 0 ? (
        <ToDoList toDos={toDos} toggleToDo={toggleToDo} />
      ) : (
        prompt
      )}
    </>
  );
}
