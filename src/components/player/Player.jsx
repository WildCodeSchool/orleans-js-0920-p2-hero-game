import {Component} from 'react'
import './Player.css';
import Videotraileravenger from '../video/videotraileravenger.mp4';

function Player() {
    return(
        <div>
            <div className="PlayerMain">
            <a className="buttonplay" href='#'><h2 className="play">JOUER</h2></a>
               <video 
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
