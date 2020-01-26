import React from 'react';
import PropTypes from 'prop-types';
import CategoryPage from '../CategoryPage.js'
import { Link } from "react-router-dom";

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      options: props.options
    }
  }

  render() {
    return (
      <div style={{display: 'inline-flex', margin: 'auto'}} > 
        <a className="Tile" style={tileStyle}> 
          <h1 style={{titleStyle}}>{this.state.name}</h1>
          {this.state.options.map(function(options){ return <p>{options}</p>; })}
          <Link to={'/{this.state.id}'}> Go </Link>
        </a>
      </div>
    );
  }

  redirectToCatPage = () => {
    /*<CategoryPage id = {PropTypes.number}/>*/
  }
}



//h1 Style
const titleStyle = {
  color: 'black',
  fontFamily: 'Helvetica Neue'
}

//Tile Style
const tileStyle = {
  background: 'white',
  border: 'none',
  cursor: 'pointer',
  margin: '70px 50px 0 50px',
  width: '250px',
  height: '250px',
  borderRadius: '25px'
}

export default Tile;

