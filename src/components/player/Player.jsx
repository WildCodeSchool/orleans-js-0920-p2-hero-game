import {Component} from 'react'
import './Player.css';
import Videotraileravenger from '../video/videotraileravenger.mp4';

function Player() {
    return(
        <div>
            <div className="PlayerMain">
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
