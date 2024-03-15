import { createContext, useState } from "react";
import { TodoType } from "../types/TodoType";

export interface TodosContextType {
  alertChange: boolean;
  setAlertChange: React.Dispatch<React.SetStateAction<boolean>>;
  todosList: TodoType[];
  setTodosList: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export const TodosContext = createContext<TodosContextType>({} as TodosContextType);

export default function TodosProvider({ children }: any) {
  const [todosList, setTodosList] = useState<TodoType[]>([]);
  const [alertChange, setAlertChange] = useState<boolean>(false);

  return (
    <TodosContext.Provider
      value={{ todosList, setTodosList, alertChange, setAlertChange }}
    >
      {children}
    </TodosContext.Provider>
  );
}
