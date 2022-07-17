import React, { useState } from "react";
import Axios from "axios";
import styled from 'styled-components';
import GameComponent from './Components/GameComponent';
const Container = styled.div` 
  display:flex;
  flex-direction:column;
  `;

const Header = styled.div`
display:block;
height: 40px;
flex-direction:row;
background-color:#161e35;
color:white;
font-size:30px;
padding:20px;
padding-top:22px;
text-align:center;
font-weight:bold;
box-shadow: 0 3px 6px 0 #555;
`;
const Searchbox = styled.div`
dispay : flex;
flex-direction= row;
padding 15px ;
background-color: white;
margin: 20px 60% 20px 33%;
align-items :centre;
width: 30%;
justify-content centre;
border-radius:40px;
border-color: black;

`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
   height:5vh;
   width:45vh;
  border-radius: 50px;
  outline: none;
  margin-left:8px;
  margin-top: 5px;
  box-shadow: 0 3px 6px 0 #555;



  background-color:#A6B2;
`;
const SearchIcon = styled.img`
width :32px;
height:32px;

`;
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
const [SearchQuery , UpdateSearchQuery] = useState();
const[timeoutID, updateTimeoutID] = useState();

const fetchdata = async (searchString) => {
 const response = await Axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json');
 console.log(response)
}



const onTextChange = (event)=>{
  clearTimeout(timeoutID);
  UpdateSearchQuery(event.target.value);
  const timeout=  setTimeout(()=>fetchdata (event.target.value),500);
  updateTimeoutID(timeout);
};

  return (
    <Container>
      <Header>GAMES WEB APPLICAION</Header>
      <Searchbox>
        <SearchIcon src = " \magnifier.png "/>
        <SearchInput placeholder=" SEARCH  GAME "  onChange ={onTextChange} value={SearchQuery}> </SearchInput>
        </Searchbox>
      <GameList> 
      {GameList?.length? (GameList.map((game , index)=>(<GameComponent key={index} game = {game}/>))):"NO GAME AVAILABLE"}
     </GameList>
      
    </Container>
  );
}
export default App;
