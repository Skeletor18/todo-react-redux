import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, checkTodo } from "./features/todoReducer";

const Main = () => {
  const dispatch = useDispatch();

  const hendelRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const hendelCheckbox = (id) => {
    dispatch(checkTodo(id));
  };

  const todos = useSelector((state) => state.todo);
  return (
    <main>
      {todos.map((item, index) => {
        return (
          <div
            key={index}
            style={
              item.completed
                ? { backgroundColor: "grey" }
                : { backgroundColor: "aqua" }
            }
          >
            <input
              type="checkbox"
              onChange={() => hendelCheckbox(index)}
              checked={item.completed}
            />
            <span>{item.text}</span>
            <button onClick={() => hendelRemove(index)}>🗑</button>
          </div>
        );
      })}
    </main>
  );
};

export default Main;
