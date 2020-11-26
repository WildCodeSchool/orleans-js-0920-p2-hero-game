import {Component} from 'react'
import './Player.css';
import Videotraileravenger from '../video/videotraileravenger.mp4';
import { Switch, Route, Link } from 'react-router-dom';

function Player() {
    return(
        <div className="PlayerTotal">
            <div className="PlayerMain" id="home">
                <div className="Color1"></div>
                <div className="DivTitle">
                    <h1 className="Title">MY SUP'R HERO</h1>
                    {/* <div className="DivButton">
                        <h2 className="SecondNavTitle">Les Personnages</h2>
                        <h2 className="SecondNavTitle">Le Quizz</h2>
                    </div> */}
                </div>
                <div className="Color2"></div>
                <Link className="buttonplay" to="/choosehero" ><h2 className="play">JOUER</h2></Link>
                <video className="video"
                    autoPlay
                    loop
                    muted>
                    <source src= {Videotraileravenger}
                    type="video/mp4"/>
               </video>
            </div>
        </div>
    )
}

export default Player
