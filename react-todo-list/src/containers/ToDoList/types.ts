import { IToDoForm } from "../ToDoForm/types";

export interface ToDoListProps {
  toDoData: IToDoForm[];
  setToDoData: React.Dispatch<React.SetStateAction<IToDoForm[]>>;
}
