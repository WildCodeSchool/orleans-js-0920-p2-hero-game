import React, {  useEffect, useState } from 'react'
import './centralCard.css'

import Anim1 from './AnimAttack1'
import Anim2 from './AnimAttack2'
import Anim3 from './AnimAttack3'
import Anim4 from './AnimAttack4'

import CardChoice from './CardChoice'
import CardLeave from './CardLeave'
import VS from '../assets/VS.png'
import ElementsReminder from '../ElementsReminder/ElementsReminder'
import Logo_Big from '../assets/Logo_Big.png'

import CaptainMarvel from '../assets/Carte_CaptainMarvel-min.png';
import Flash from '../assets/Carte_Flash-min.png';
import Gamora from '../assets/Carte_Gamora-min.png';
import GreenLantern from '../assets/Carte_Greenlantern-min.png';
import Groot from '../assets/Carte_Groot-min.png';
import HarleyQuinn from '../assets/Carte_Harleyquinn-min.png';
import Hulk from '../assets/Carte_Hulk-min.png';
import InvisibleWoman from '../assets/Carte_Invisiblewoman-min.png';
import IronMan from '../assets/Carte_Ironman-min.png';
import Joker from '../assets/Carte_Joker-min.png';
import Medusa from '../assets/Carte_Medusa-min.png';
import Mera from '../assets/Carte_Mera-min.png';
import PoisonIvy from '../assets/Carte_Poisonivy-min.png';
import QuickSilver from '../assets/Carte_QuickSilver-min.png';
import SpiderMan from '../assets/Carte_Spiderman-min.png';
import SuperGirl from '../assets/Carte_Supergirl-min.png';
import SuperMan from '../assets/Carte_Superman-min.png';
import Thanos from '../assets/Carte_Thanos-min.png';
import Wolwerine from '../assets/Carte_Wolwerine-min.png';
import WonderWoman from '../assets/Carte_Wonderwoman-min.png';


function CentralCard() {

    const [fullChamp, setFullchamp] = useState([
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        },
        {
            healthPoints: "", "clevernessAttack": { "attackStats": 0 },
            "strengthAttack": { "attackStats": 0 },
            "speedAttack": { "attackStats": 0 },
            "resistanceAttack": { "attackStats": 0 }
        }

    ])

    const player = localStorage.getItem('player')

    console.log("player", player)

    const [str, setStr] = useState([])
    const [spe, setSpe] = useState([])
    const [cle, setCle] = useState([])
    const [res, setRes] = useState([])

    const [userHero, setUserHero] = useState(Mera)
    const [enemyHero, setEnemeyEHero] = useState(SuperMan)

    const [btnCle, setbtnCle] = useState(0)
    const [btnStr, setbtnStr] = useState(0)
    const [btnSpe, setbtnSpe] = useState(0)
    const [btnRes, setbtnRes] = useState(0)
    useEffect(() => { localStorage.setItem('cleAlly', btnCle); }, [btnCle]);
    useEffect(() => { localStorage.setItem('strAlly', btnStr); }, [btnStr]);
    useEffect(() => { localStorage.setItem('speAlly', btnSpe); }, [btnSpe]);
    useEffect(() => { localStorage.setItem('resAlly', btnRes); }, [btnRes]);

    const [lifeBarEnn, setLifeBarEnn] = useState(0);
    useEffect(() => { localStorage.setItem('lifeEnn', lifeBarEnn); }, [lifeBarEnn]);

    let [majLifeEnn, setMajLifeEnn] = useState(0)

    useEffect(() => {
        setMajLifeEnn(parseInt(localStorage.getItem("lifeEnn")))
    }, [lifeBarEnn])

    useEffect(() => {
        localStorage.setItem("MajLifeEnn", majLifeEnn)
    }, [majLifeEnn])


    const [lifeBarAlly, setLifeBarAlly] = useState(0)

    useEffect(() => { localStorage.setItem('lifeAlly', lifeBarAlly); }, [lifeBarAlly])

    let [majLife, setMajLife] = useState(0)

    useEffect(() => {
        setMajLife(parseInt(localStorage.getItem("lifeAlly")))
    }, [lifeBarAlly])


    useEffect(() => {
        localStorage.setItem("MajLife", majLife)
    }, [majLife])


    const [btnCleEnemy, setbtnCleEnemy] = useState(0)
    const [btnStrEnemy, setbtnStrEnemy] = useState(0)
    const [btnSpeEnemy, setbtnSpeEnemy] = useState(0)
    const [btnResEnemy, setbtnResEnemy] = useState(0)

    useEffect(() => { localStorage.setItem('cleEnemy', btnCleEnemy); }, [btnCleEnemy]);
    useEffect(() => { localStorage.setItem('strEnemy', btnStrEnemy); }, [btnStrEnemy]);
    useEffect(() => { localStorage.setItem('speEnemy', btnSpeEnemy); }, [btnSpeEnemy]);
    useEffect(() => { localStorage.setItem('resEnemy', btnResEnemy); }, [btnResEnemy]);

    useEffect(() => {
        switch(player) {
            case 'QuickSilver': return setUserHero(QuickSilver);
            case 'Superman' : return setUserHero(SuperMan);
            case 'Mera' : return setUserHero(Mera);
            case 'Captainmarvel': return setUserHero(CaptainMarvel);
            case 'Groot': return setUserHero(Groot);
            case 'Gamora': return setUserHero(Gamora);
            case 'Ironman' : return setUserHero(IronMan);
            case 'Greenlantern': return setUserHero(GreenLantern);
            case 'Hulk': return setUserHero(Hulk);
            case 'Invisiblewoman':return setUserHero(InvisibleWoman);
            case 'Wonderwoman': return setUserHero(WonderWoman);
            case 'Wolwerine' : return setUserHero(Wolwerine);
            case 'Thanos': return setUserHero(Thanos);
            case 'Joker': return setUserHero(Joker);
            case 'Harleyquinn': return setUserHero(HarleyQuinn);
            case 'Poisonivy': return setUserHero(PoisonIvy);
            case 'Medusa' : return setUserHero(Medusa);
            case 'Spiderman': return setUserHero(SpiderMan);
            case 'Flash' : return setUserHero(Flash);
            case 'Supergirl' : return setUserHero(SuperGirl);
            
            default : setUserHero(SuperMan);
        }

    }, [])

    useEffect(() => {
        let randomE = Math.floor(Math.random() * 20);
        console.log("random",randomE)

        switch(randomE) {
            case 1 : return setEnemeyEHero(QuickSilver);
            case 2 : return setEnemeyEHero(SuperMan);
            case 3 : return setEnemeyEHero(Mera);
            case 4 : return setEnemeyEHero(CaptainMarvel);
            case 5 : return setEnemeyEHero(Groot);
            case 6 : return setEnemeyEHero(Gamora);
            case 7 : return setEnemeyEHero(IronMan);
            case 8 : return setEnemeyEHero(GreenLantern);
            case 9 : return setEnemeyEHero(Hulk);
            case 10 : return setEnemeyEHero(InvisibleWoman);
            case 11 : return setEnemeyEHero(WonderWoman);
            case 12 : return setEnemeyEHero(Wolwerine);
            case 13 : return setEnemeyEHero(Thanos);
            case 14 : return setEnemeyEHero(Joker);
            case 15 : return setEnemeyEHero(HarleyQuinn);
            case 16 : return setEnemeyEHero(PoisonIvy);
            case 17 : return setEnemeyEHero(Medusa);
            case 18 : return setEnemeyEHero(SpiderMan);
            case 19 : return setEnemeyEHero(Flash);
            case 20 : return setEnemeyEHero(SuperGirl);
            
            default : setEnemeyEHero(Mera);
        }
    }, [])

    useEffect(() => {
        fetch('https://my-super-heroes-api-wcs.herokuapp.com/heroes')
            .then(res => res.json())
            .then((data) => {
                setFullchamp(data);
            })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setStr(fullChamp.filter((hero) => hero.type === "Strength"))
            setSpe(fullChamp.filter((hero) => hero.type === "Speed"))
            setCle(fullChamp.filter((hero) => hero.type === "Cleverness"))
            setRes(fullChamp.filter((hero) => hero.type === "Resistance"))
        }, 1000)

        console.log(fullChamp)

    }, [fullChamp])


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

        for (let n = 0; n < checkUser.length; n++) {

            if (checkUser[n] > 0) {
                setbtnStr(fullChamp[n].strengthAttack.attackStats)
                setbtnSpe(fullChamp[n].speedAttack.attackStats)
                setbtnCle(fullChamp[n].clevernessAttack.attackStats)
                setbtnRes(fullChamp[n].resistanceAttack.attackStats)
                setLifeBarAlly(fullChamp[n].healthPoints)


            } else {

            }

        }


        for (let y = 0; y < checkUser.length; y++) {

            if (checkEnemy[y] > 0) {
                setbtnStrEnemy(fullChamp[y].strengthAttack.attackStats)
                setbtnSpeEnemy(fullChamp[y].speedAttack.attackStats)
                setbtnCleEnemy(fullChamp[y].clevernessAttack.attackStats)
                setbtnResEnemy(fullChamp[y].resistanceAttack.attackStats)
                setLifeBarEnn(fullChamp[y].healthPoints)

            } else {

            }

        }


        let nameCheck = ""

        for (let v = 0; v < checkEnemy.length; v++) {

            if (checkEnemy[v] > 0) {
                nameCheck = nameChange[v]
            }
            else {
            }

        }

        for (let x = 0; x < str.length; x++) {
            if (spe[x].name.includes(nameCheck)) {
                setbtnStr(btnStr * 0.5)
                setbtnRes(btnRes * 2)
            }
            else if (str[x].name.includes(nameCheck)) {
                setbtnCle(btnCle * 0.5)
                setbtnSpe(btnSpe * 2)
            }
            else if (cle[x].name.includes(nameCheck)) {
                setbtnRes(btnRes * 0.5)
                setbtnStr(btnStr * 2)
            }
            else if (res[x].name.includes(nameCheck)) {
                setbtnSpe(btnSpe * 0.5)
                setbtnCle(btnCle * 2)
            }
            else {

            }

        }

        let nameCheckEnemy = ""

        for (let v = 0; v < checkUser.length; v++) {

            if (checkUser[v] > 0) {
                nameCheckEnemy = nameChange[v]
            }
            else {
            }

        }

        for (let x = 0; x < str.length; x++) {
            if (spe[x].name.includes(nameCheckEnemy)) {
                setbtnStrEnemy(btnStrEnemy * 0.5)
                setbtnResEnemy(btnResEnemy * 2)
            }
            if (str[x].name.includes(nameCheckEnemy)) {
                setbtnCleEnemy(btnCleEnemy * 0.5)
                setbtnSpeEnemy(btnSpeEnemy * 2)
            }
            if (cle[x].name.includes(nameCheckEnemy)) {
                setbtnResEnemy(btnResEnemy * 0.5)
                setbtnStrEnemy(btnStrEnemy * 2)
            }
            if (res[x].name.includes(nameCheckEnemy)) {
                setbtnSpeEnemy(btnSpeEnemy * 0.5)
                setbtnCleEnemy(btnCleEnemy * 2)
            }
            else {

            }

        }

    }, [res])

    const refreshPage = () => {
        window.location.reload();
    }




    return (
        <div >
            <div className="CentralDiv">
                <div className="DivUser" onMouseEnter={CardChoice} onMouseLeave={CardLeave}>
                    <div class="healthBarShell">
                        <div class="healthBarValue"></div>

                    </div>
                    <picture className="Card"><img className="UserCard" src={userHero} alt="Carte User en jeu" /></picture>
                    <button className="ButtonAttack1 BtnU" id="att1" onClick={Anim1}></button>
                    <button className="ButtonAttack2 BtnU" id="att2" onClick={Anim2}></button>
                    <button className="ButtonAttack3 BtnU" id="att3" onClick={Anim3}></button>
                    <button className="ButtonAttack4 BtnU" id="att4" onClick={Anim4}></button>
                </div>
                <div className="VisualContainer">
                    <img className="LogoGame" src={Logo_Big}></img>
                    <div className="newTurn">It's your turn!</div>
                    <img className="Versus" src={VS}></img>
                    <div className="ElementsReminderContainer">
                        <ElementsReminder />
                    </div>

                </div>

                <div className="EnemyCard">
                    <picture className="Card"><img className="EnemyCard" src={enemyHero} alt="Carte Enemy en jeu" /></picture>
                    <div class="healthBarShellCPU">
                        <div class="healthBarValueCPU"></div>
                    </div>
                </div>
                <div className="endGame">
                    <div className='defeat'>Défaite..</div>
                    <div className='victory'>Victoire !</div>
                    <button className="buttonretry" onClick={refreshPage}> Rejouer ? </button>
                </div>
            </div>
        </div>
     

    )

};



export default CentralCard