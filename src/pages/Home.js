import React from "react";
import fetchToDos from "../api/fetchToDos";
import { Link } from "react-router-dom";

function Home() {
  const [toDos, setToDos] = React.useState(null);

  // tasks neuladen und setTask ausführen
  async function doFetch() {
    const fetchData = await fetchToDos();
    setToDos(fetchData);
  }
  React.useEffect(() => {
    doFetch();
  }, []);

  return (
    <>
      <Link to="/">Add Task</Link>
      {toDos?.map((todo) => (
        <h3 key={todo.id}>{todo.task}</h3>
      ))}
    </>
  );
}
export default Home;
