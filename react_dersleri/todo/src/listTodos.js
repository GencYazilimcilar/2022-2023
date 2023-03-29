import React, { memo } from "react";
import TodosItem from "./todosItem";
function ListTodos({ todos }) {
  console.log("ListTodos render edildi");
  return (
    <ul>
      {todos.map((item, index) => (
        <TodosItem key={index} item={item} />
      ))}
    </ul>
  );
}
export default memo(ListTodos);
