import './App.css';
import React, { useState } from "react";
import Axios from "axios";
import styled from 'styled-components';
import GameComponent from './Components/GameComponent';

const GameList = styled.div`
flex-direction:;
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
padding : 30px;
cursor:pointer;
cover
`;

function App() {
  const [SearchQuery, UpdateSearchQuery] = useState();
  const [timeoutID, updateTimeoutID] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json');
    console.log(response)
  }

  const onTextChange = (event) => {
    clearTimeout(timeoutID);
    UpdateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutID(timeout);
    
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">Games Web Application</header>
        <div className='searchBox'>
          <div>
            <input
              className='searchInput'
              placeholder="SEARCH GAME"
              onChange={onTextChange}
              value={SearchQuery}>
            </input>
            <image src=''></image>
          </div>
          <GameList>
            {GameList?.length ? (GameList.map((game, index) => (<GameComponent key={index} game={game} />))) : "NO GAME AVAILABLE"}
          </GameList>
        </div>
      </div>
    </div>
  );
}
export default App;