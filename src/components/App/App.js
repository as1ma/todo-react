import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ToDoForm from "../ToDoForm/ToDoForm.js";
import ToDoList from "../ToDoList/ToDoList.js";
import ToDo from "../ToDo/ToDo.js";
import { setStorage } from "../../storage.js";

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
      <ToDoForm addToDo={addToDo} />
      {toDos.length < 1 ? (
        <p className="italic">Add some to-dos...</p>
      ) : (
        <ToDoList>
          {toDos.map((toDo) => (
            <ToDo
              {...toDo}
              key={toDo.id}
              toggleToDo={toggleToDo}
              deleteToDo={deleteToDo}
            />
          ))}
        </ToDoList>
      )}
    </>
  );
}

App.propTypes = {
  toDos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default App;
