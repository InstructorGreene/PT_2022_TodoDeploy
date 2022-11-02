import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import View from "./View";
import Add from "./Add";
import MyNav from "./Navbar";

function App() {
  const [todos, changeTodos] = useState([]);

  // looks at a our application, and runs a function when some conditions are met

  // this function runs when the App renders for the first time
  useEffect(() => {
    // go into local storage
    // fetch the list
    // store the list in state
    const list = localStorage.getItem("list");
    const parsed = JSON.parse(list);
    changeTodos(parsed || []);
  }, []);

  // function gets a new todo
  // adds it to state
  // takes the whole list
  // puts it into local storage

  const updateTodos = (newTodo) => {
    changeTodos((prev) => {
      localStorage.setItem("list", JSON.stringify([...prev, newTodo]));
      return [...prev, newTodo];
    });
  };
  //pass down to Add some way to change the list
  return (
    <Container>
      <MyNav />
      <Routes>
        <Route path="/" index element={<View todos={todos} />} />
        <Route path="/Add" element={<Add updateTodos={updateTodos} />} />
      </Routes>
    </Container>
  );
}
export default App;
