import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import todoData from "./tododata";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault("");

    const date = new Date();
    const fullDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;

    setTodoList((prevList) => [
      ...prevList,
      { id: Math.floor(Math.random() * 100 + 1), todo, date: fullDate },
    ]);
  };

  return (
    <div className="app">
      <Header />
      <div className="container form-list-container">
        <Form handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
        <TodoList setTodoList={setTodoList} todoList={todoList} />
      </div>
    </div>
  );
};

export default App;
