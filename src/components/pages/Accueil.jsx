import React from 'react'
import Player from '../player/Player'
import CharacterList from '../CharacterList/CharacterList'
import Quizz from '../Quizz/Quizz'

function Accueil() {
  return (
    <div>
      <Player />
      <CharacterList />
      <Quizz />
   
    </div>
  );
}

export default Accueil;