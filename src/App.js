import React from "react";
import "./App.css";
import fetchToDos from "./api/fetchToDos";
import postToDo from "./api/postToDo";

function App() {
  const [toDos, setToDos] = React.useState(null);

  // tasks neuladen und setTask ausführen
  async function doFetch() {
    const fetchData = await fetchToDos();
    setToDos(fetchData);
  }
  React.useEffect(() => {
    doFetch();
  }, []);

  function addToDo() {
    postToDo("DJ finden").then(doFetch);
  }

  return (
    <div>
      {toDos?.map((todo) => (
        <h3 key={todo.id}>{todo.task}</h3>
      ))}
      <input placeholder="new ToDo" />
      <button onClick={addToDo}>Click me</button>
    </div>
  );
}

export default App;
