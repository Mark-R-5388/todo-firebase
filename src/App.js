import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault("");
    console.log("submit");
  };

  return (
    <div className="app">
      <Header />
      <Form handleSubmit={handleSubmit} />
      <p>To do</p>
    </div>
  );
};

export default App;
