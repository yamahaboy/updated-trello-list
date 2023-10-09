import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/CheckBox/CheckBox";

interface CardProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  onDelete: () => void;
  onToggleCompleted: () => void;
  onEdit: () => void;
  isEditing: boolean;
  onSave: (
    id: number,
    updatedTitle: string,
    updatedDescription: string
  ) => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  completed,
  onDelete,
  onToggleCompleted,
  onEdit,
  onSave,
}: CardProps) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = () => {
    onToggleCompleted();
  };

  const handleEditClick = () => {
    onEdit();
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSave(id, updatedTitle, updatedDescription);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className={`card ${completed ? "checked" : ""}`}>
      <div className="title-card">
        <strong>Title: </strong>{" "}
        {isEditing ? (
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        ) : (
          <span
            style={{
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "red" : "black",
            }}
          >
            {title}
          </span>
        )}
      </div>
      <div className="description-card">
        <strong>Description: </strong>{" "}
        {isEditing ? (
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        ) : (
          <span
            style={{
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "red" : "black",
            }}
          >
            {description}
          </span>
        )}
      </div>
      <div className="button-block">
        <Checkbox checked={completed} onChange={handleCheckboxChange} />
        {isEditing ? (
          <div>
            <Button type="button" onClick={handleSaveClick}>
              Save
            </Button>
            <Button type="button" onClick={handleCancelClick}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button type="button" onClick={handleEditClick}>
            Edit
          </Button>
        )}
        <div style={{ display: isEditing ? "none" : "flex" }}>
          <Button type="button" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
