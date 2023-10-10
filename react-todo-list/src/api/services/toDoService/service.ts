import { IToDoForm } from "../../../store/ToDoContext";

export const getToDos = async (): Promise<IToDoForm[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.map(({ id, title, description, completed }: IToDoForm) => ({
    id,
    title,
    description,
    completed,
  }));
};
