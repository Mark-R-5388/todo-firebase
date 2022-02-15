import { useEffect, useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import todoData from "./tododata";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(todoData);

  console.log(todoList);

  const handleSubmit = (e) => {
    e.preventDefault("");
    console.log("submit");
  };

  return (
    <div className="app">
      <Header />
      <div className="container valign-wrapper">
        <Form handleSubmit={handleSubmit} />
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
};

export default App;
