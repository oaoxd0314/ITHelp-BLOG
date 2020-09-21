import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Notes from "./pages/Notes";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/Notes" component={Notes} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}
