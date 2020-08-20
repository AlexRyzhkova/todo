import React from "react";
import fetchToDos from "../api/fetchToDos";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";

function Home() {
  const { data: toDos, loading, error } = useAsync(fetchToDos);

  return (
    <>
      <Link to="/add">Add Task</Link>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {toDos?.map((todo) => (
        <h3 key={todo.id}>{todo.task}</h3>
      ))}
    </>
  );
}
export default Home;
