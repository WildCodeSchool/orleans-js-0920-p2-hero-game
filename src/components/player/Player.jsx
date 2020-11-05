import {Component} from 'react'
import './Player.css';
import Videotraileravenger from '../video/videotraileravenger.mp4';
import { Switch, Route, Link } from 'react-router-dom';

function Player() {
    return(
        <div>
            <div className="PlayerMain" id="home">
            <Link className="buttonplay" to="/game" ><h2 className="play">JOUER</h2></Link>
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
