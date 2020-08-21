import React from "react";
import fetchToDos from "../api/fetchToDos";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import TaskListItem from "../TaskListItem";

function Home() {
  const { data: toDos, loading, error } = useAsync(fetchToDos);

  return (
    <div>
      <Link to="/add">Add Task</Link>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}

      {toDos?.map((todo) => (
        <TaskListItem key={todo.id}>{todo.task}</TaskListItem>
      ))}
    </div>
  );
}
export default Home;
