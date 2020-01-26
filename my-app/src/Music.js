import React, { Component } from "react";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import "./Music.css";
import { FormControl, FormGroup, Form, Button } from "react-bootstrap";

class Music extends React.Component {
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
      //               <link
      //     rel="stylesheet"
      //     href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      //     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      //     crossorigin="anonymous"
      //   />
      //   <div className="song-holder">
      //     <div className="song-item">
      //       <div>1</div>
      //       <div>2</div>
      //       <div>3</div>
      //       <div>4</div>
      //     </div>
      //   </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Song</th>
            <th># of Likes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Havana</td>
            <td>5</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Fuck</td>
            <td>5</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Everything</td>
            <td>5</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Music;
