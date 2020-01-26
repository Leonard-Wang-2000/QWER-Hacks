import React from "react";
import Tile from "./Components/Tile.js";
import "./App.css";
import fire from "./config/fire";
import Home from "./Home";
import Login from "./Login";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Home />
        {/* {this.state.category.map(category => (
          <Tile
            id={category.id}
            name={category.name}
            options={category.options}
          />
        ))} */}
        {/* {this.state.user ? <Home /> : <Login />} */}
      </div>
    );
  }
}

export default App;
