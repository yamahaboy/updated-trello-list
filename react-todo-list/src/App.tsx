import React from "react";
import "./styles/App.css";
import { ToDoProvider } from "./store/ToDoContext";

import { ToDoForm } from "./containers/ToDoForm/ToDoForm";
import { ToDoList } from "./containers/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ToDoProvider>
          <ToDoForm />
          <ToDoList />
        </ToDoProvider>
      </div>
    </div>
  );
}

export default App;
