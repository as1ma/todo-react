import { useState, useEffect } from "react";
import { setStorage } from "../storage";
import Form from "./Form";
import ToDoList from "./ToDoList";

function App(props) {
  const [toDos, setToDos] = useState(props.toDos);

  function addToDo(value) {
    const newToDo = {
      id: window.crypto.randomUUID(),
      name: value,
      done: false,
    };

    setToDos([...toDos, newToDo]);
  }

  function toggleToDo(id) {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id !== id) return toDo;
      return { ...toDo, done: !toDo.done };
    });

    setToDos(updatedToDos);
  }

  function deleteToDo(id) {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  }

  useEffect(() => {
    setStorage(toDos);
  }, [toDos]);

  return (
    <>
      <Form addToDo={addToDo} />
      {toDos.length < 1 ? (
        <p>
          <em>Add some to-dos...</em>
        </p>
      ) : (
        <ToDoList
          toDos={toDos}
          toggleToDo={toggleToDo}
          deleteToDo={deleteToDo}
        />
      )}
    </>
  );
}

export default App;
