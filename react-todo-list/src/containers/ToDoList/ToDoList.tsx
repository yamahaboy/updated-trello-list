import React from "react";
import { Card } from "../Card/Card";
import { ToDoListProps } from "../ToDoList/types";

import "./ToDoList.css";

export const ToDoList: React.FC<ToDoListProps> = ({
  toDoData,
  setToDoData,
}: ToDoListProps) => {
  const deleteHandler = (idToDeleteCard: number) => {
    const updatedToDoData = toDoData.filter(({ id }) => id !== idToDeleteCard);
    setToDoData(updatedToDoData);
  };

  return (
    <div className="toDo-list">
      <h3 className="toDo-list-title">ToDo List</h3>
      {toDoData.map(({ id, title, description }) => (
        <Card
          key={id}
          title={title}
          description={description}
          onDelete={() => deleteHandler(id)}
        />
      ))}
    </div>
  );
};
