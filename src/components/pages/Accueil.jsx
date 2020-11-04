import React from 'react'
import Navbar from '../navbar/Navbar';
import CharacterList from '../CharacterList/CharacterList'
import Quizz from '../Quizz'

function Accueil() {
  return (
    <div>
      <CharacterList />
      <Quizz />

    </div>
  );
}

export default Accueil;