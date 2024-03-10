import EffectOne from "./components/Effectone";
import EffectTwo from "./components/Effecttwo";
import Counter from "./components/counter";
import Login from "./components/login";
import PropsDrilling from "./components/propsDrilling";
import Register from "./components/register";
import ToDolist from "./components/todolist";
import Welcome from "./components/welcome";
import { useState } from "react";
import React from 'react';
import { CounterProvider, CounterDisplay, CounterButtons } from './components/CounterContext';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [students, setStudents] = useState(["a", "b", "c", "d"]);
  const [counter, setCounter] = useState(1234);
  return (
    <div>
      <CounterProvider>
        <div>
          <CounterDisplay />
          <CounterButtons />
        </div>
      </CounterProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todolist" element={<ToDolist />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/Effectone" element={<EffectOne />} />
          <Route path="/Effecttwo" element={<EffectTwo />} />
          <Route
            path="/propsDrilling"
            element={<PropsDrilling counter={counter} students={students} />}
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
