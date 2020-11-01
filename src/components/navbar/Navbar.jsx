import React from 'react';
import './Navbar.css';
import logo from './Logo_Mini.png';
import open from './Annim';
import { Switch, Route, Link } from 'react-router-dom';
import Jeux from '../pages/Jeux';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {

        return (

            <div>
                <nav className="navbar_total" id="Marty">
                    <div className="navbar_navigation">
                        <div className="navbar_divLogo">
                            <Link className="navbar_home" to="/" >ACCUEIL</Link>
                            <picture className="navbar_picLogo"><img className="navbar_logo" src={logo} alt="Logo My Sup'R Heros" /></picture>
                        </div>

                        <div className="navbar_rightDiv">
                            <ul className="navbar_navList">
                                <Link className="navbar_title" to="/game" >JEUX</Link>
                                <a href="#list"><li className="navbar_title">PERSONNAGES</li></a>
                                <a href="#quizz"><li className="navbar_title">QUIZZ</li></a>
                            </ul>
                        </div>
                        <a className="navbar_burgerMenu" href="#" onClick={open}>
                            <span className="navbar_spanTop"></span>
                            <span className="navbar_spanMid"></span>
                            <span className="navbar_spanBot"></span>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
};



export default Navbar;

