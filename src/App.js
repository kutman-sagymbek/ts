import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./Components/Header/Header";
import Todo from "./Components/Main/Todo";
import "./style/_style.scss";
import AddTodo from "./Components/Main/AddTodo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <div className="main">
              <Routes>
                  <Route path="/Todo" element={<Todo/>}/>
                  <Route path="/" element={<AddTodo/>}/>
              </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
