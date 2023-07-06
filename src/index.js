import React, { useState } from "react";
import ReactDOM from "react-dom";
import TODO from "./todo";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [toDos, setToDos] = useState(["todo1", "todo2"]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <TODO toDos={toDos} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
