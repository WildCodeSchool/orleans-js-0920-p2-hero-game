import React, { useEffect, useState } from 'react'
import './centralCard.css'
import Anim from './AnimAttack'
import Superman from '../cards/Carte_Superman-min.png'
import Joker from '../cards/Carte_Joker-min.png'
import Mera from '../cards/Carte_Mera-min.png'
import CardChoice from './CardChoice'
import CardLeave from './CardLeave'

function CentralCard() {

    const [fullChamp, setFullchamp] = useState([])

    const [userHero, setUserHero] = useState(Mera)
    const [enemyHero, setEnemeyEHero] = useState(Superman)

    const [btnInt, setbtnInt] = useState(0)
    const [btnStr, setbtnStr] = useState(0)
    const [btnSpe, setbtnSpe] = useState(0)
    const [btnRes, setbtnRes] = useState(0)

    useEffect(() => {
        fetch('https://my-super-heroes-api-wcs.herokuapp.com/heroes')
        .then(res => res.json())
        .then(data => setFullchamp([data]));
        console.log(fullChamp)
      }, []);
        
    

    return(
            
        <div >
            <div className="CentralDiv">    
            <div className="DivUser" onMouseEnter={CardChoice} onMouseLeave={CardLeave}>
                <picture className="Card"><img className="UserCard" src={userHero} alt="Carte User en jeu" /></picture>
                <button className="ButtonAttack1 BtnU" onClick={Anim}></button>
                <button className="ButtonAttack2 BtnU" onClick={Anim}></button>
                <button className="ButtonAttack3 BtnU" onClick={Anim}></button>
                <button className="ButtonAttack4 BtnU" onClick={Anim}></button>
            </div>
                
            <div>
                <picture className="Card"><img className="EnemyCard" src={enemyHero} alt="Carte Enemy en jeu"/></picture>
            </div>
            </div>
        </div>

    )
    
};



export default CentralCard