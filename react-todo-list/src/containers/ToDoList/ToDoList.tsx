import React, { useState } from "react";
import { Card } from "../Card/Card";
import { useToDoContext } from "../../store/ToDoContext";
import "./ToDoList.css";

export const ToDoList: React.FC = () => {
  const { toDoData, setToDoData } = useToDoContext();
  const [editItemId, setEditItemId] = useState<number | null>(null);

  const deleteHandler = (idToDeleteCard: number) => {
    const updatedToDoData = toDoData.filter(({ id }) => id !== idToDeleteCard);
    setToDoData(updatedToDoData);
  };

  const toggleCompleted = (idToToggle: number) => {
    const updatedToDoData = toDoData.map((todo) =>
      todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
    );
    setToDoData(updatedToDoData);
  };

  const editHandler = (idToEdit: number) => {
    setEditItemId(idToEdit);
  };

  const saveHandler = (
    idToSave: number,
    updatedTitle: string,
    updatedDescription: string
  ) => {
    const updatedToDoData = toDoData.map((todo) =>
      todo.id === idToSave
        ? { ...todo, title: updatedTitle, description: updatedDescription }
        : todo
    );
    setToDoData(updatedToDoData);
    setEditItemId(null);
  };

  return (
    <div className="toDo-list">
      <h3 className="toDo-list-title">ToDo List</h3>
      {toDoData.map(({ id, title, description, completed }) => (
        <Card
          key={id}
          id={id}
          title={title}
          description={description}
          completed={completed}
          onDelete={() => deleteHandler(id)}
          onToggleCompleted={() => toggleCompleted(id)}
          onEdit={() => editHandler(id)}
          isEditing={id === editItemId}
          onSave={saveHandler}
        />
      ))}
    </div>
  );
};
