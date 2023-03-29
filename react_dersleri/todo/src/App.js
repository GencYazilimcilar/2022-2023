import React, { useState, useCallback, useMemo } from "react";
import Header from "./header";
import FormTodos from "./formTodos";
import ListTodos from "./listTodos";

function App() {
  const [todos, setTodos] = useState([]); //['todo1','todo2','todo3','todo1']
  const [todo, setTodo] = useState("");
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  console.log("App render edildi");
  const addTodo = useCallback(() => {
    setTodos([...todos, todo]); //push();
    setTodo("");
  }, [todos, todo]);
  const onChange = useCallback((e) => {
    setTodo(e.target.value);
  },[]);
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredTodos = useMemo(() => {
    return todos.filter((item) => item.includes(search));
  }, [todos, search]);
  return (
    <>
      <Header />
      <p>Sayaç: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
      <hr />
      <h3>Görev ekle</h3>
      <FormTodos addTodo={addTodo} onChange={onChange} todo={todo} />
      <hr />
      <h3>Arama Yap</h3>
      <input onChange={onSearchChange} type="text" />
      <hr />
      <h2>Görevler</h2>
      <ListTodos todos={filteredTodos} />
    </>
  );
}
export default App;
