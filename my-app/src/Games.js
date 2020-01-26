import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCounterOne: 0,
      itemCounterTwo: 0,
      itemCounterThree: 0
    };
  }
  increment = counter => {
    counter = counter + 1;
  };
  componentDidMount = () => {
    this.db = fire.firestore();
  };
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Games</th>
            <th># of Likes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>League of Legends</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2</td>
            <td>MapleStory</td>
            <td>3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Brawl</td>
            <td>12</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Games;
