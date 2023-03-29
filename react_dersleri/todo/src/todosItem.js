import React, { memo } from "react";

function TodosItem({ item }) {
  console.log("TodosItem render edildi:" + item);
  return <li>{item}</li>;
}
export default memo(TodosItem);
