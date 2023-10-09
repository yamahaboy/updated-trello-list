import React, { useState } from "react";
import "./ToDoForm.css";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import { useToDoContext } from "../../store/ToDoContext";

export const ToDoForm: React.FC = () => {
  const { setToDoData } = useToDoContext();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
  };

  const descriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDescription(value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() === "") {
      setTitleError("* Input field for title is required");
      return;
    }

    if (description.trim() === "") {
      setDescriptionError("* Input field for description is required");
      return;
    }

    const id = Date.now();
    setToDoData((prevData) => [
      ...prevData,
      { id, title, description, completed: false },
    ]);

    setTitle("");
    setDescription("");
    setTitleError(null);
    setDescriptionError(null);
  };

  return (
    <form className="toDo-form" onSubmit={onSubmitHandler}>
      <h3 className="toDo-form-title">Add toDo</h3>
      <div className="container">
        <InputText placeholder="Title:" value={title} onChange={titleHandler} />
        {titleError && <div className="error-message">{titleError}</div>}
        <InputText
          placeholder="Description:"
          value={description}
          onChange={descriptionHandler}
        />
        {descriptionError && (
          <div className="error-message">{descriptionError}</div>
        )}
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
