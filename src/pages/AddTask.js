import React from "react";
import { Link } from "react-router-dom";
import postToDo from "../api/postToDo";

function AddTask() {
  const [title, setTitle] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleTitelChange(event) {
    setTitle(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);

    const todo = {
      task: title,
    };
    try {
      await postToDo(todo);
      setTitle("");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Titel:
          <input name="title" value={title} onChange={handleTitelChange} />
        </label>

        <input type="submit" value="Add task" disabled={!title || loading} />
        {error && <p>Something bad happened 🤣. Please try again.</p>}
      </form>

      <Link to="/">Tasks</Link>
    </>
  );
}

export default AddTask;
