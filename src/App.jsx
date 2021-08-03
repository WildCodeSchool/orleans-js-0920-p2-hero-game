import './App.css';
import Footer from './components/footer/Footer';
import './Main.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './components/pages/Accueil';
import NavBar from './components/navbar/Navbar'
import Player from './components/player/Player';
import CharacterList from './components/CharacterList/CharacterList'
import Quizz from './components/Quizz/Quizz';
import Game from './components/pages/Jeux';
import ChooseYourHero from './components/pages/ChooseYourHero';


function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/list" component={CharacterList} />
          <Route path="/quizz" component={Quizz} />
          <Route path="/choosehero" component={ChooseYourHero} />
          <Route path="/game" component={Game} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
