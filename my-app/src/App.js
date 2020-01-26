import React from "react";
import "./App.css";
import fire from "./config/fire";
import Home from "./Home";
import Login from "./Login";

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
    return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
