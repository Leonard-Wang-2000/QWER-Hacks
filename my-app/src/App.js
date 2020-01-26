import React from 'react';
import Tile from './Components/Tile.js';
import './App.css';

class App extends React.Component {
  state = {
    category: [
      {
        id: 1,
        name: 'MUSIC Genres',
        options: ['Indie', 'Hip-Hop', 'Rap']
      },
      {
        id: 2,
        name: 'Sports',
        options: ['Basketball', 'Football', 'Soccer']
      },
      {
        id: 3,
        name: 'Movies',
        options: ['Interstellar', 'Mirrors', 'Avengers: End Game']
      },
      {
        id: 4,
        name: 'Video Games',
        options: ['League of Legends', 'Maplestory', 'Brawl']
      },
      {
        id: 5,
        name: 'Animals',
        options: ['Dogs', 'Cats', 'Hamsters']
      },
      {
        id: 6,
        name: 'Television Shows',
        options: ['How I Met Your Mother', 'Black Mirrors', 'Friends']
      }
    ]
  }

  render () {
    return (
      <div className="App">
        {this.state.category.map(category => <Tile id={category.id} name={category.name} options={category.options} />)}
      </div>
    );
  }
}

export default App;
