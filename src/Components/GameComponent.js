import styled from "styled-components";
const GameContainer = styled.div`
padding:10px;
width 280px;
box-shadow:0 3px 10px 0 #aaa;
display:flex;
flex-direction: column;
cursor: pointer;
height:auto;
`;
const GameName  = styled.span`
font-size :18px;
font-weight:600;
color:black;
flex-irection:column;
white-space:nowrap;
text-overflow: ellipsis;
overflow : hidden;

`;
const InfoCol = styled.div`
 dispaly :flex;
 flex-direction: column;
`;
const GameInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  flex-direction: row
   white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;


const GameComponent = (props) => {
  const{title,platform,score,genre,editors_choice} = props.game;

    return <GameContainer>
        <GameName>title    :  {title}  </GameName>
      <InfoCol>
        
        <GameInfo>platform : {platform} </GameInfo>
        <GameInfo>score    : {score} </GameInfo>
        <GameInfo>genre    : {genre} </GameInfo>
        <GameInfo>editors_choice :{editors_choice} </GameInfo>
       
      </InfoCol>

    </GameContainer>;

}
export default GameComponent;