import React from "react";
import { Link } from "react-router-dom";
import postToDo from "../api/postToDo";

function AddTask() {
  function addToDo() {
    postToDo("DJ finden");
  }
  const [title, setTitel] = React.useState("");

  function handleTitelChange(event) {
    setTitel(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Submitted" + title);
    console.log(title);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Titel:
          <input
            type="text"
            name="titel"
            value={title}
            onChange={handleTitelChange}
          />
        </label>
        <input type="submit" value="Add task" />
      </form>

      <Link to="/add">Tasks</Link>
    </>
  );
}

export default AddTask;
