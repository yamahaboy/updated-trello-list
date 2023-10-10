import styled from "styled-components";
import { DisplayButtonProps, CrossLineProps } from "./types";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  resize: none;
  height: auto;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  color: rgb(74, 71, 71);
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  font-size: 1rem;
`;

export const Strong = styled.strong`
  color: black;
`;

export const CrossLine = styled.span<CrossLineProps>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "red" : "black")};
`;

export const CardDescription = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  resize: none;
  height: auto;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  color: rgb(74, 71, 71);
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  font-size: 1rem;
`;

export const ButtonBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 10px;
`;

export const DisplayButton = styled.div<DisplayButtonProps>`
  display: ${(props) => (props.isEditing ? "none" : "flex")};
`;

export const StyledInput = styled.input`
  font-size: 16px;
`;
