import "./List.css";
import { useContext } from "react";
import {
  TodosContext,
  TodosContextType,
} from "../../../providers/TodoProvider";

import { PRIORITY } from "../../../enums/PriorityEnum";
import { PRIORITY_COLOR } from "../../../enums/PriorityEnum";

import { handleCheck, deleteTodo } from "../../../CRUD functions/CRUDFunctions";

const trashImg = require("../../../images/trash.png");

export default function List() {
  const { todosList, setTodosList, setAlertChange } =
    useContext<TodosContextType>(TodosContext);

  return (
    <ul className="list">
      {todosList &&
        todosList.length > 0 &&
        todosList.map((todo: any) => (
          <li key={todo.id}>
            <input
              onChange={() => handleCheck(todo, setAlertChange)}
              checked={todo.completed}
              type="checkbox"
              className="checkbox"
            />
            <span className="title">{todo.title}</span>
            <span
              className="priority"
              style={{
                backgroundColor:
                  todo.priority === PRIORITY.HIGH
                    ? PRIORITY_COLOR.HIGH
                    : todo.priority === PRIORITY.MEDIUM
                    ? PRIORITY_COLOR.MEDIUM
                    : PRIORITY_COLOR.LOW,
              }}
            >
              {todo.priority}
            </span>
            <div>
              <img
                onClick={() =>
                  deleteTodo(todo, setTodosList, todosList, setAlertChange)
                }
                className="delete"
                src={trashImg}
                alt="Delete"
              />
            </div>
          </li>
        ))}
    </ul>
  );
}
