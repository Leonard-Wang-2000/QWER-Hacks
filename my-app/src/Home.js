import React, { Component } from "react";
import fire from "./config/fire";
import Tile from "./Components/Tile.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
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

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        {this.state.category.map(category => (
          <Tile
            id={category.id}
            name={category.name}
            options={category.options}
          />
        ))}
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
