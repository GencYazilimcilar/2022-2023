import React, { memo } from "react";

function FormTodos({ todo, onChange, addTodo }) {
  console.log("FormTodos render edildi");
  return (
    <>
      <input value={todo} onChange={onChange} type="text" />
      <button onClick={addTodo}>Ekle</button>
    </>
  );
}
export default memo(FormTodos);
