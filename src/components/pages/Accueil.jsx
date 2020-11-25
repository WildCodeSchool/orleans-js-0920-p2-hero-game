import {useEffect} from 'react'
import Player from '../player/Player'
import CharacterList from '../CharacterList/CharacterList'
import Quizz from '../Quizz/Quizz'

function Accueil() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Player />
      <CharacterList />
      <Quizz />
   
    </div>
  );
}

export default Accueil;