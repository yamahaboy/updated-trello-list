import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { CardProps } from "./types";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import "./Card.css";

export const Card: React.FC<CardProps> = ({
  title,
  description,
  onDelete,
}: CardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`card ${isChecked ? "checked" : ""}`}>
      <div className="title-card">
        <strong>Title: </strong>{" "}
        <span
          style={{
            textDecoration: isChecked ? "line-through" : "none",
            color: isChecked ? "red" : "black",
          }}
        >
          {title}
        </span>
      </div>
      <div className="description-card">
        <strong>Description: </strong>{" "}
        <span
          style={{
            textDecoration: isChecked ? "line-through" : "none",
            color: isChecked ? "red" : "black",
          }}
        >
          {description}
        </span>
      </div>
      <div className="button-block">
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <Button type="submit">Edit</Button>
        <Button type="submit" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};
