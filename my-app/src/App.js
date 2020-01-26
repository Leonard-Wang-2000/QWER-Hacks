import React from "react";
import "./App.css";
import fire from "./config/fire";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import CategoryPage from "./CategoryPage";
import { Link, Route } from "react-router-dom";
import Music from "./Music";
import Games from "./Games";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/categories" component={CategoryPage} />
        <Route exact path="/categories/Music%20Genres" component={Music} />
        <Route exact path="/categories/Games" component={Games} />
        <Route exact path="/categories/Movies" component={CategoryPage} />
        <Route exact path="/categories/Sports" component={CategoryPage} />
        <Route exact path="/categories/TV%20Shows" component={CategoryPage} />
        <Route exact path="/categories/Animals" component={CategoryPage} />
      </div>
    );
  }
}

export default App;
