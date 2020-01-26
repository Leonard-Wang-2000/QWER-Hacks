import React from 'react';
import PropTypes from 'prop-types';
import CategoryPage from '../CategoryPage.js'
import { Link } from "react-router-dom";

class Tile extends React.Component {
  render() {
    return (
      <div style={{display: 'inline-flex', margin: 'auto'}} > 
        <a className="Tile" style={tileStyle}> 
          <h1 style={{titleStyle}}>{this.props.name}</h1>
          {this.props.options.map(function(options){ return <p>{options}</p>; })}
          <button onClick = {this.redirectToCatPage}> vote </button>
        </a>
      </div>
    );
  }

  redirectToCatPage = () => {
    /*<CategoryPage id = {PropTypes.number}/>*/
  }
}

Tile.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  options: PropTypes.array
};

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

