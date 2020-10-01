import React ,{useEffect}from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Notes from "./pages/Notes";
import NotesDetail from "./pages/NotesDetail";
import { Route, Switch } from "react-router-dom";
import {useDispatch } from "react-redux";
import { fetchPageData } from "./redux/action/Note_Action";

export default function App() {
  const dispatch = useDispatch();

  const getall = () => dispatch(fetchPageData());

  useEffect(() => {
    getall();
  });

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/Notes/:param" component={NotesDetail} />
        <Route exact path="/Notes" component={Notes} />
        <Route path="/About" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}
