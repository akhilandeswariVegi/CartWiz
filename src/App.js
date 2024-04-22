import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
}

export default App;
