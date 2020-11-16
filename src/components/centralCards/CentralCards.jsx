import React, { useLayoutEffect, useEffect, useState } from 'react'
import './centralCard.css'
import Anim from './AnimAttack'
import Superman from '../cards/Carte_Superman-min.png'
import Joker from '../cards/Carte_Joker-min.png'
import Mera from '../cards/Carte_Mera-min.png'
import CardChoice from './CardChoice'
import CardLeave from './CardLeave'
import VS from '../assets/VS.png'
import ElementsReminder from '../ElementsReminder/ElementsReminder'
import Logo_Big from '../assets/Logo_Big.png'


function CentralCard() {

    const [fullChamp, setFullchamp] = useState([
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}},
        {"clevernessAttack":{"attackStats":0},
        "strengthAttack":{"attackStats":0},
        "speedAttack":{"attackStats":0},
        "resistanceAttack":{"attackStats":0}}

    ])
    const [str, setStr] = useState([])
    const [spe, setSpe] = useState([])
    const [cle, setCle] = useState([])
    const [res, setRes] = useState([])

    const [userHero, setUserHero] = useState(Mera)
    const [enemyHero, setEnemeyEHero] = useState(Joker)

    const [btnCle, setbtnCle] = useState(0)
    const [btnStr, setbtnStr] = useState(0)
    const [btnSpe, setbtnSpe] = useState(0)
    const [btnRes, setbtnRes] = useState(0)

    const [btnCleEnemy, setbtnCleEnemy] = useState(0)
    const [btnStrEnemy, setbtnStrEnemy] = useState(0)
    const [btnSpeEnemy, setbtnSpeEnemy] = useState(0)
    const [btnResEnemy, setbtnResEnemy] = useState(0)

     useEffect(() => {localStorage.setItem('cleEnemy', btnCleEnemy);}, [btnCleEnemy]);
     useEffect(() => {localStorage.setItem('strEnemy', btnStrEnemy);}, [btnStrEnemy]); 
     useEffect(() => {localStorage.setItem('speEnemy', btnSpeEnemy);}, [btnSpeEnemy]);
     useEffect(() => {localStorage.setItem('resEnemy', btnResEnemy);}, [btnResEnemy]);

    useEffect(() => {
        fetch('https://my-super-heroes-api-wcs.herokuapp.com/heroes')
        .then(res => res.json())
        .then((data) => {
            setFullchamp(data);
        })
    },[])
    
    useEffect(() => {
        setTimeout(()=>{
            setStr(fullChamp.filter((hero) => hero.type === "Strength"))
            setSpe(fullChamp.filter((hero) => hero.type === "Speed"))
            setCle(fullChamp.filter((hero) => hero.type === "Cleverness"))
            setRes(fullChamp.filter((hero) => hero.type === "Resistance"))
       }, 1000)
        
    },[fullChamp])


    useEffect(() => {
            

            const checkUser = [
                userHero.indexOf("QuickSilver"),
                userHero.indexOf("CaptainMarvel"),
                userHero.indexOf("Superman"),
                userHero.indexOf("Supergirl"),
                userHero.indexOf("Groot"),
                userHero.indexOf("Gamora"),
                userHero.indexOf("Ironman"),
                userHero.indexOf("Hulk"),
                userHero.indexOf("Joker"),
                userHero.indexOf("Harleyquinn"),
                userHero.indexOf("Mera"),
                userHero.indexOf("Flash"),
                userHero.indexOf("Poisonivy"),
                userHero.indexOf("Medusa"),
                userHero.indexOf("Spiderman"),
                userHero.indexOf("Greenlantern"),
                userHero.indexOf("Invisiblewoman"),
                userHero.indexOf("Wonderwoman"),
                userHero.indexOf("Wolwerine"),
                userHero.indexOf("Thanos"),
                
            ]

            const checkEnemy = [
                enemyHero.indexOf("QuickSilver"),
                enemyHero.indexOf("CaptainMarvel"),
                enemyHero.indexOf("Superman"),
                enemyHero.indexOf("Supergirl"),
                enemyHero.indexOf("Groot"),
                enemyHero.indexOf("Gamora"),
                enemyHero.indexOf("Ironman"),
                enemyHero.indexOf("Hulk"),
                enemyHero.indexOf("Joker"),
                enemyHero.indexOf("Harleyquinn"),
                enemyHero.indexOf("Mera"),
                enemyHero.indexOf("Flash"),
                enemyHero.indexOf("Poisonivy"),
                enemyHero.indexOf("Medusa"),
                enemyHero.indexOf("Spiderman"),
                enemyHero.indexOf("Greenlantern"),
                enemyHero.indexOf("Invisiblewoman"),
                enemyHero.indexOf("Wonderwoman"),
                enemyHero.indexOf("Wolwerine"),
                enemyHero.indexOf("Thanos"),
                
            ]
        
            const nameChange = [
                "Quick Silver",
                "Captain Marvel",
                "Superman",
                "Supergirl",
                "Groot",
                "Gamora",
                "Iron Man",
                "Hulk",
                "Joker",
                "Harley Quinn",
                "Mera",
                "Flash",
                "Poison Ivy",
                "Medusa",
                "Spiderman",
                "Green Lantern",
                "Invisible Woman",
                "Wonder Woman",
                "Wolwerine",
                "Thanos"
            
            ]
            
            for(let n = 0; n < checkUser.length; n++){

                if(checkUser[n] > 0){
                        setbtnStr(fullChamp[n].strengthAttack.attackStats)
                        setbtnSpe(fullChamp[n].speedAttack.attackStats)
                        setbtnCle(fullChamp[n].clevernessAttack.attackStats)
                        setbtnRes(fullChamp[n].resistanceAttack.attackStats)

                } else {
                    
                }

            }


            for(let y = 0; y < checkUser.length; y++){

                if(checkEnemy[y] > 0){
                        setbtnStrEnemy(fullChamp[y].strengthAttack.attackStats)
                        setbtnSpeEnemy(fullChamp[y].speedAttack.attackStats)
                        setbtnCleEnemy(fullChamp[y].clevernessAttack.attackStats)
                        setbtnResEnemy(fullChamp[y].resistanceAttack.attackStats)

                } else {
                    
                }

            }


            let nameCheck = ""

            for(let v = 0; v < checkEnemy.length; v++){

                if(checkEnemy[v] > 0){
                        nameCheck = nameChange[v]
                } 
                else {
                }
        
            }

            for(let x = 0; x < str.length; x++){
                if(spe[x].name.includes(nameCheck)){
                    setbtnStr(btnStr * 0.5)
                    setbtnRes(btnRes * 2)
                }
                else if(str[x].name.includes(nameCheck)){
                    setbtnCle(btnCle * 0.5)
                    setbtnSpe(btnSpe * 2)
                }
                else if(cle[x].name.includes(nameCheck)){
                    setbtnRes(btnRes * 0.5)
                    setbtnStr(btnStr * 2)
                }
                else if(res[x].name.includes(nameCheck)){
                    setbtnSpe(btnSpe * 0.5)
                    setbtnCle(btnCle * 2)
                }
                else{

                }

            }

    }, [res])


    



    return(
            <div >
                <div className="CentralDiv">
                <div className="DivUser" onMouseEnter={CardChoice} onMouseLeave={CardLeave}>
                    <div class="healthBarShell">
                        <div class="healthBarValue"></div>
                    </div>
                    <picture className="Card"><img className="UserCard" src={userHero} alt="Carte User en jeu" /></picture>
                    <button className="ButtonAttack1 BtnU" onClick={Anim}></button>
                    <button className="ButtonAttack2 BtnU" onClick={Anim}></button>
                    <button className="ButtonAttack3 BtnU" onClick={Anim}></button>
                    <button className="ButtonAttack4 BtnU" onClick={Anim}></button>
                </div>
                <div className="VisualContainer">
                    <img className="LogoGame" src={Logo_Big}></img>
                    <img className="Versus" src={VS}></img>
                    <div className="ElementsReminderContainer">
                            <ElementsReminder />
                    </div>
                    
                </div>
                
                <div className="EnemyCard">
                    <picture className="Card"><img className="EnemyCard" src={enemyHero} alt="Carte Enemy en jeu"/></picture>
                    <div class="healthBarShellCPU">
                    <div class="healthBarValueCPU"></div>
                    </div>
                </div>
                
                </div>
            </div>

    )
    
};



export default CentralCard