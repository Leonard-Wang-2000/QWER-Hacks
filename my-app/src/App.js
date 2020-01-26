import React from "react";
import Tile from "./Components/Tile.js";
import "./App.css";
import fire from "./config/fire";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      category: [
        {
          id: 1,
          name: "MUSIC Genres",
          options: ["Indie", "Hip-Hop", "Rap"]
        },
        {
          id: 2,
          name: "Sports",
          options: ["Basketball", "Football", "Soccer"]
        },
        {
          id: 3,
          name: "Movies",
          options: ["Interstellar", "Mirrors", "Avengers: End Game"]
        },
        {
          id: 4,
          name: "Video Games",
          options: ["League of Legends", "Maplestory", "Brawl"]
        },
        {
          id: 5,
          name: "Animals",
          options: ["Dogs", "Cats", "Hamsters"]
        },
        {
          id: 6,
          name: "Television Shows",
          options: ["How I Met Your Mother", "Black Mirrors", "Friends"]
        }
      ]
    };
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
  //asdasdasadasdasddadas
  render() {
    return (
      <div className="App">
        {this.state.category.map(category => (
          <Tile
            id={category.id}
            name={category.name}
            options={category.options}
          />
        ))}
        {/* {this.state.user ? <Home /> : <Login />} */}
      </div>
    );
  }
}

export default App;
