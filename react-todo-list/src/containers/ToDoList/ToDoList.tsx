import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { useToDoContext } from "../../store/ToDoContext";

import { getToDos } from "../../api/services/toDoService/service";

import { TodoList, ListTitle, Container, RestoreButton } from "./styles";

export const ToDoList: React.FC = () => {
  const { toDoData, setToDoData, lastDeleted, setLastDeleted } =
    useToDoContext();
  const [editItemId, setEditItemId] = useState<number | null>(null);

  const deleteHandler = (idToDeleteCard: number) => {
    const deleteLastItem = toDoData.find((todo) => todo.id === idToDeleteCard);
    if (deleteLastItem) {
      setLastDeleted(deleteLastItem);
    }

    const updatedToDoData = toDoData.filter(({ id }) => id !== idToDeleteCard);
    setToDoData(updatedToDoData);
  };

  const restoreHandler = () => {
    if (lastDeleted) {
      setToDoData([lastDeleted, ...toDoData]);
      setLastDeleted(null);
    }
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getToDos();
        setToDoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setToDoData]);

  return (
    <TodoList>
      <Container>
        <ListTitle>ToDo List</ListTitle>
        <RestoreButton onClick={restoreHandler} disabled={!lastDeleted}>
          Restore Last
        </RestoreButton>
      </Container>
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
    </TodoList>
  );
};
