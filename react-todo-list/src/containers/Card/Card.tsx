import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/CheckBox/CheckBox";

import { CardProps } from "./types";

import {
  StyledCard,
  CardTitle,
  Strong,
  CrossLine,
  CardDescription,
  ButtonBlock,
  DisplayButton,
  StyledInput,
} from "./styles";

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
    setUpdatedTitle("");
    setUpdatedDescription("");
  };

  return (
    <StyledCard>
      <CardTitle>
        <Strong>Title: </Strong>{" "}
        {isEditing ? (
          <StyledInput
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        ) : (
          <CrossLine completed={completed} title={title}>
            {title}
          </CrossLine>
        )}
      </CardTitle>
      <CardDescription>
        <Strong>Description: </Strong>
        {isEditing ? (
          <StyledInput
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        ) : (
          <CrossLine completed={completed} description={description}>
            {description}
          </CrossLine>
        )}
      </CardDescription>
      <ButtonBlock>
        <Checkbox checked={completed} onChange={handleCheckboxChange} />
        {isEditing ? (
          <ButtonBlock>
            <Button type="button" onClick={handleSaveClick}>
              Save
            </Button>
            <Button type="button" onClick={handleCancelClick}>
              Cancel
            </Button>
          </ButtonBlock>
        ) : (
          <Button type="button" onClick={handleEditClick}>
            Edit
          </Button>
        )}
        <DisplayButton isEditing={isEditing}>
          <Button type="button" onClick={onDelete}>
            Delete
          </Button>
        </DisplayButton>
      </ButtonBlock>
    </StyledCard>
  );
};
