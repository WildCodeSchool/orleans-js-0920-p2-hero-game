import './App.css';
import Footer from './components/footer/Footer';
import './Main.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Jeux from './components/pages/Jeux';
import Accueil from './components/pages/Accueil';
import NavBar from './components/navbar/Navbar'
import Quizz from '../src/components/Quizz/Quizz';
import Player from './components/player/Player';


function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Player />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/game" component={Jeux} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
