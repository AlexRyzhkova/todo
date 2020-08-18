import React from "react";
import "./App.css";
import fetchToDos from "./api/fetchToDos";

function App() {
  fetchToDos();
  return <div className="App">Hallo</div>;
}

export default App;
