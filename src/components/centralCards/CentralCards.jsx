import React, { Component } from 'react'
import './centralCard.css'
import Anim from './AnimAttack'
import Superman from '../cards/Carte_Superman-min.png'
import Joker from '../cards/Carte_Joker-min.png'
import Mera from '../cards/Carte_Mera-min.png'
import CardChoose from './CardChoose'
import CardLeave from './CardLeave'

class CentralCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enemyCard: Superman,
            userCard: Mera,
        };
    }

    render() {
        
        return(
            
            <div className="CentralDiv">
                <div className="DivUser" onMouseEnter={CardChoose} onMouseLeave={CardLeave}>
                    {/* <p className="TitleCard">JOKER</p> */}
                    <picture className="Card"><img className="UserCard" src={this.state.userCard} alt="Carte User en jeu" /></picture>
                    <button className="ButtonAttack1 BtnU" onClick={Anim}></button>
                    <button className="ButtonAttack2 BtnU" onClick={Anim}></button>
                    <button className="ButtonAttack3 BtnU" onClick={Anim}></button>
                    <button className="ButtonAttack4 BtnU" onClick={Anim}></button>
                </div>
                
                <div>
                    {/* <p className="TitleCard">SUPERMAN</p> */}
                    <picture className="Card"><img className="EnemyCard" src={this.state.enemyCard} alt="Carte Enemy en jeu"/></picture>
                </div>
            </div>

        )
    
    }
};



export default CentralCard