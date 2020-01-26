import React, { Component } from "react";
import fire from "./config/fire";
import Tile from "./Components/Tile.js";
import "./App.css"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      user: {},
      category: []
    };
  }

  componentDidMount = () => {
    this.db = fire.firestore();
    this.unsubscribe = this.db.collection("Categories").onSnapshot((collection) => {
      let newCategoryList = [];
      collection.forEach(function(doc){
        let category = doc.data();
        let newCategory = {
          id: category.id,
          name: category.name,
          options: category.options
        };
        newCategoryList.push(newCategory);
      });
      this.setState({
        category: newCategoryList
      });
    });
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className = "App"> 
        <button onClick={this.logout}>Logout</button>
        {this.state.category.map(category => (
          <Tile
            id={category.id}
            name={category.name}
            options={category.options}
          />
        ))}
        
      </div>
    );
  }
}

export default Home;
