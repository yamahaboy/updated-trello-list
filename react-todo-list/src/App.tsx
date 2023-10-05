import { useState } from "react";
import "./styles/App.css";

import { ToDoForm } from "./containers/ToDoForm/ToDoForm";
import { ToDoList } from "./containers/ToDoList/ToDoList";
import { IToDoForm } from "../src/containers/ToDoForm/types";

function App() {
  const [toDoData, setToDoData] = useState<IToDoForm[]>([]);
  console.log("TODO_DATA=>", toDoData);

  const setFormDataHandler = (data: IToDoForm) => {
    setToDoData((prevData) => [...prevData, data]);
  };

  return (
    <div className="App">
      <div className="container">
        <ToDoForm setFormDataHandler={setFormDataHandler} />
        <ToDoList toDoData={toDoData} setToDoData={setToDoData} />
      </div>
    </div>
  );
}

export default App;
