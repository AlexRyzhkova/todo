import React from "react";
import "./App.css";
import fetchToDos from "./api/fetchToDos";

function App() {
  const [toDos, setToDos] = React.useState(null);
  React.useEffect(() => {
    async function doFetch() {
      const fetchData = await fetchToDos();
      setToDos(fetchData);
    }
    doFetch();
  }, []);

  return (
    <div>
      {toDos?.map((todo) => (
        <h3 key={todo.id}>{todo.task}</h3>
      ))}
    </div>
  );
}

export default App;
