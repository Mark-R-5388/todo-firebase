import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const firebaseConfig = {
  apiKey: "AIzaSyBiaIet0K8_l9s_I7ahcUSxsXm05gILhTY",
  authDomain: "todo-app-d57b7.firebaseapp.com",
  projectId: "todo-app-d57b7",
  storageBucket: "todo-app-d57b7.appspot.com",
  messagingSenderId: "716392771518",
  appId: "1:716392771518:web:0e98f00cc566c1322753ef",
};

initializeApp(firebaseConfig);

const dataBase = getFirestore();
const auth = getAuth();

const collectionRef = collection(dataBase, "todos");

onSnapshot(collectionRef, (snapshot) => {
  let todos = [];
  snapshot.docs.forEach((doc) => {
    todos.push({ ...doc.data(), id: doc.id, completed: false });
  });
  console.log(todos);
});

const handleDelete = (e) => {
  e.preventDefault();
  const docRef = doc(dataBase, "todos", e.target.id.value);
  deleteDoc(docRef).then(() => (e.target.id.value = ""));
};

const handleSignUp = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created", cred.user);
      e.target.email.value = "";
      e.target.password.value = "";
    })
    .catch((err) => console.log(err.message));
};

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailLogin, setEmailLogin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(collectionRef, {
      todo: e.target.todo.value,
    }).then(() => {
      e.target.todo.value = "";
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user logged in", cred.user);
      })
      .catch((err) => console.log(err.message));
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("the user signed out");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="app">
      <Header />
      <div className="container form-list-container">
        <Form
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          passwordLogin={passwordLogin}
          setPasswordLogin={setPasswordLogin}
          emailLogin={emailLogin}
          setEmailLogin={setEmailLogin}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          handleLogOut={handleLogOut}
          handleLogin={handleLogin}
          id={id}
          setId={setId}
          todo={todo}
          setTodo={setTodo}
        />
        <TodoList setTodoList={setTodoList} todoList={todoList} />
      </div>
    </div>
  );
};

export default App;
