import { configureStore } from "@reduxjs/toolkit";
import { todoReduce } from "../features/todoReducer";

export const store = configureStore({
  reducer: todoReduce,
});
