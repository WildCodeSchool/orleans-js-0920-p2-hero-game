import React, { Component } from 'react'
import './centralCard.css'
import Anim from './AnimAttack'
import Superman from '../cards/Carte_Superman-min.png'
import Joker from '../cards/Carte_Joker-min.png'
import Mera from '../cards/Carte_Mera-min.png'
import CardChoice from './CardChoice'
import CardLeave from './CardLeave'
import VS from '../assets/VS.png'
import ElementsReminder from '../ElementsReminder/ElementsReminder'
import Logo_Entier from '../assets/Logo_Entier.png'


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
            
            <div >
                <div className="CentralDiv">
                <div className="DivUser" onMouseEnter={CardChoice} onMouseLeave={CardLeave}>
                    {/* <p className="TitleCard">JOKER</p> */}
                    <div class="healthBarShell">
                        <div class="healthBarValue"></div>
                    </div>
                    <picture className="Card"><img className="UserCard" src={this.state.userCard} alt="Carte User en jeu" /></picture>
                    <button className="ButtonAttack1 BtnU" onClick={Anim}></button>
                    <button className="ButtonAttack2 BtnU" onClick={Anim}></button>
                    <button className="ButtonAttack3 BtnU" onClick={Anim}></button>
                    <button className="ButtonAttack4 BtnU" onClick={Anim}></button>
                </div>
                <div className="VisualContainer">
                    <img className="LogoGame" src={Logo_Entier}></img>
                    <img className="Versus" src={VS}></img>
                    <div className="ElementsReminderContainer">
                            <ElementsReminder />
                    </div>
                    
                </div>
                
                <div className="EnemyCard">
                    {/* <p className="TitleCard">SUPERMAN</p> */}
                   
                    <picture className="Card"><img className="EnemyCard" src={this.state.enemyCard} alt="Carte Enemy en jeu"/></picture>
                    <div class="healthBarShellCPU">
                        <div class="healthBarValueCPU"></div>
                    </div>
                </div>
                
                </div>
            </div>

        )
    
    }
};



export default CentralCard