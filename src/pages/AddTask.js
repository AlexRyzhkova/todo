import React from "react";
import { Link } from "react-router-dom";
import postToDo from "../api/postToDo";

function AddTask() {
  const [title, setTitle] = React.useState("");

  function handleTitelChange(event) {
    setTitle(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const todo = {
      task: title,
    };
    await postToDo(todo);
    setTitle("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Titel:
          <input name="title" value={title} onChange={handleTitelChange} />
        </label>

        <input type="submit" value="Add task" />
      </form>

      <Link to="/">Tasks</Link>
    </>
  );
}

export default AddTask;
