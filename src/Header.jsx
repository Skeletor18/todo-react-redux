import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todoReducer";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const hendelClick = () => {
    if (text) {
      dispatch(
        addTodo({
          text: text,
          completed: false,
        })
      );
    }
    setText("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="✍ Введите текст..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={hendelClick}>Добавить</button>
    </form>
  );
};

export default Header;
