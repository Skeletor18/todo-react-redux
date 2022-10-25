import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      text: "Java Script",
      completed: false,
    },
    {
      text: "PHP",
      completed: false,
    },
    {
      text: "C++",
      completed: false,
    },
  ],
};

export const addTodo = createAction("addTodo");
export const removeTodo = createAction("removeTodo");
export const checkTodo = createAction("checkTodo");

export const  todoReduce = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todo.push(action.payload);
    })
    .addCase(removeTodo, (state, action) => {
      state.todo = state.todo.filter((item, index) => index !== action.payload);
    })
    .addCase(checkTodo, (state, action) => {
      state.todo = state.todo.map((item, index) => {
        if (index === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
    });
});
