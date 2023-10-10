import React, { createContext, useContext, useState } from "react";

interface IToDoForm {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface IToDoContext {
  toDoData: IToDoForm[];
  setToDoData: React.Dispatch<React.SetStateAction<IToDoForm[]>>;
  lastDeleted: IToDoForm | null;
  setLastDeleted: React.Dispatch<React.SetStateAction<IToDoForm | null>>;
}

const ToDoContext = createContext<IToDoContext | undefined>(undefined);

export const useToDoContext = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("error on useToDoContext, check ToDoProvider");
  }
  return context;
};

export const ToDoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toDoData, setToDoData] = useState<IToDoForm[]>([]);
  const [lastDeleted, setLastDeleted] = useState<IToDoForm | null>(null);
  console.log("Data=>", toDoData);
  return (
    <ToDoContext.Provider
      value={{ toDoData, setToDoData, lastDeleted, setLastDeleted }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
