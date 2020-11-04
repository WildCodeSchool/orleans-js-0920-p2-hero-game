import React, {useState} from 'react';
import './CharacterList.css';

import ThanosIc from '../assets/Thanos_icone-min.png';
import FlashIc from '../assets/Flash_icone-min.png';
import GamoraIc from '../assets/Gamora_icone-min.png';
import GreenlanternIc from '../assets/Greenlantern_icone-min.png';
import GrootIc from '../assets/Groot_icone-min.png';
import HarleyquinnIc from '../assets/Harleyquinn_icone-min.png';
import HulkIc from '../assets/Hulk_icone-min.png';
import InvisibleWomanIc from '../assets/Invisiblewoman_icone-min.png';
import IronManIc from '../assets/Ironman.icone-min.png';
import JokerIc from '../assets/Joker_icone-min.png';
import MedusaIc from '../assets/Medusa_icone-min.png';
import MeraIc from '../assets/Mera_icone-min.png';
import PoisonIvyIc from '../assets/Poisonivy_icone-min.png';
import QuickSilverIc from '../assets/Quicksilver_icone-min.png';
import SpiderManIc from '../assets/Spiderman_icone-min.png';
import SuperGirlIc from '../assets/Supergirl_icone-min.png';
import SuperManIc from '../assets/Superman_icone-min.png';
import WolwerineIc from '../assets/Wolwerine_icone-min.png';
import WonderWomanIc from '../assets/Wonderwoman_icone-min.png';
import CaptainMarvelIc from '../assets/Captainmarvel_icone-min.png';

import StrenghtIc from '../assets/Icone_Force.png';
import IntelIc from '../assets/Icone_Intelligence.png';
import SpeedIc from '../assets/Icone_Rapidité.png';
import DurabilityIc from '../assets/Icone_Resistance.png';

import CaptainMarvelStat from '../assets/Carte_CaptainMarvel-min.png';
import FlashStat from '../assets/Carte_Flash-min.png';
import GamoraStat from '../assets/Carte_Gamora-min.png';
import GreenLanternStat from '../assets/Carte_Greenlantern-min.png';
import GrootStat from '../assets/Carte_Groot-min.png';
import HarleyQuinnStat from '../assets/Carte_Harleyquinn-min.png';
import HulkStat from '../assets/Carte_Hulk-min.png';
import InvisibleWomanStat from '../assets/Carte_Invisiblewoman-min.png';
import IronManStat from '../assets/Carte_Ironman-min.png';
import JokerStat from '../assets/Carte_Joker-min.png';
import MedusaStat from '../assets/Carte_Medusa-min.png';
import MeraStat from '../assets/Carte_Mera-min.png';
import PoisonIvyStat from '../assets/Carte_Poisonivy-min.png';
import QuickSilverStat from '../assets/Carte_QuickSilver-min.png';
import SpiderManStat from '../assets/Carte_Spiderman-min.png';
import SuperGirlStat from '../assets/Carte_Supergirl-min.png';
import SuperManStat from '../assets/Carte_Superman-min.png';
import ThanosStat from '../assets/Carte_Thanos-min.png';
import WolwerineStat from '../assets/Carte_Wolwerine-min.png';
import WonderWomanStat from '../assets/Carte_Wonderwoman-min.png';

const CharacterList = () => {

    

        const [quickSilver, setQuicksilver]= useState(false)
        const changeQuicksilver=() => setQuicksilver(!quickSilver)

        const [superman, setSuperman]= useState(false)
        const changeSuperman=() => setSuperman(!superman)

        const [supergirl, setSupergirl]= useState(false)
        const changeSupergirl=() => setSupergirl(!supergirl)

        const [mera, setMera]= useState(false)
        const changeMera=() => setMera(!mera)

        const [flash, setFlash]= useState(false)
        const changeFlash=() => setFlash(!flash)

        const [captainmarvel, setCaptainMarvel]= useState(false)
        const changeCaptainMarvel=() => setCaptainMarvel(!captainmarvel)

        const [groot, setGroot]= useState(false)
        const changeGroot=() => setGroot(!groot)

        const [gamora, setGamora]= useState(false)
        const changeGamora=() => setGamora(!gamora)

        const [ironman, setIronman]= useState(false)
        const changeIronman=() => setIronman(!ironman)

        const [greenlantern, setGreenLantern]= useState(false)
        const changeGreenLantern=() => setGreenLantern(!greenlantern)

        const [hulk, setHulk]= useState(false)
        const changeHulk=() => setHulk(!hulk)

        const [invisiblewoman, setInvisiblewoman]= useState(false)
        const changeInvisiblewoman=() => setInvisiblewoman(!invisiblewoman)

        const [wonderwoman, setWonderwoman]= useState(false)
        const changeWonderwoman=() => setWonderwoman(!wonderwoman)

        const [wolwerine, setWolwerine]= useState(false)
        const changeWolwerine=() => setWolwerine(!wolwerine)

        const [thanos, setThanos]= useState(false)
        const changeThanos=() => setThanos(!thanos)

        const [joker, setJoker]= useState(false)
        const changeJoker=() => setJoker(!joker)

        const [harleyquinn, setHarleyquinn]= useState(false)
        const changeHarleyquinn=() => setHarleyquinn(!harleyquinn)

        const [poisonivy, setPoisonIvy]= useState(false)
        const changePoisonIvy=() => setPoisonIvy(!poisonivy)

        const [medusa, setMedusa]= useState(false)
        const changeMedusa=() => setMedusa(!medusa)

        const [spiderman, setSpiderman]= useState(false)
        const changeSpiderman=() => setSpiderman(!spiderman)
        




    return (
        <div id="list">
        <div id="character" className="list">

            <img className="card" src="" />
            <img id="icons" className="one" src={QuickSilverIc} onClick={changeQuicksilver} />
                {quickSilver && (
                    <img className="card" src={QuickSilverStat} />
                )}
            <img id="icons" className="two" src={SuperManIc}  onClick={changeSuperman} />
                {superman && (
                    <img className="card" src={SuperManStat} />
                )}
            <img id="icons" className="five" src={SuperGirlIc} onClick={changeSupergirl} />
                {supergirl && (
                    <img className="card" src={SuperGirlStat} />
                )}
            <img id="icons" className="six" src={MeraIc} onClick={changeMera} />
                {mera && (
                    <img className="card" src={MeraStat} />
                )}
            <img id="icons" className="seven" src={FlashIc} onClick={changeFlash} />
                {flash && (
                    <img className="card" src={FlashStat} />
                )}

            <img id="icons" className="three" src={CaptainMarvelIc} onClick={changeCaptainMarvel} />
                {captainmarvel && (
                    <img className="card" src={CaptainMarvelStat} />
                )}
            <img id="icons" className="four" src={GrootIc} onClick={changeGroot} />
                {groot && (
                    <img className="card" src={GrootStat} />
                )}
            <img id="icons" className="eight" src={GamoraIc} onClick={changeGamora} />
                {gamora && (
                    <img className="card" src={GamoraStat} />
                )}
            <img id="icons" className="nine" src={IronManIc} onClick={changeIronman} />
                {ironman && (
                    <img className="card" src={IronManStat} />
                )}
            <img id="icons" className="ten" src={GreenlanternIc} onClick={changeGreenLantern} />
                {greenlantern && (
                    <img className="card" src={GreenLanternStat} />
                )}

            <img id="icons" className="eleven" src={HulkIc} onClick={changeHulk} />
                {hulk && (
                    <img className="card" src={HulkStat} />
                )}
            <img id="icons" className="twelve" src={InvisibleWomanIc} onClick={changeInvisiblewoman} />
                {invisiblewoman && (
                    <img className="card" src={InvisibleWomanStat} />
                )}
            <img id="icons" className="thirteen" src={WonderWomanIc} onClick={changeWonderwoman} />
                {wonderwoman && (
                    <img className="card" src={WonderWomanStat} />
                )}
            <img id="icons" className="seventeen" src={WolwerineIc} onClick={changeWolwerine} />
                {wolwerine && (
                    <img className="card" src={WolwerineStat} />
                )}
            <img id="icons" className="eighteen" src={ThanosIc} onClick={changeThanos} />
                {thanos && (
                    <img className="card" src={ThanosStat} />
                )}

            <img id="icons" className="sixteen" src={JokerIc} onClick={changeJoker} />
                {joker && (
                    <img className="card" src={JokerStat} />
                )}
            <img id="icons" className="fifteen" src={HarleyquinnIc} onClick={changeHarleyquinn} />
                {harleyquinn && (
                    <img className="card" src={HarleyQuinnStat} />
                )}
            <img id="icons" className="fourteen" src={PoisonIvyIc} onClick={changePoisonIvy} />
                {poisonivy && (
                    <img className="card" src={PoisonIvyStat} />
                )}
            <img id="icons" className="nineteen" src={MedusaIc} onClick={changeMedusa} />
                {medusa && (
                    <img className="card" src={MedusaStat} />
                )}
            <img id="icons" className="twenty" src={SpiderManIc} onClick={changeSpiderman} />
                {spiderman && (
                    <img className="card" src={SpiderManStat} />
                )}

            <img className="strenght" src={StrenghtIc} />
            <img className="speed" src={SpeedIc} />
            <img className="durabi" src={DurabilityIc} />
            <img className="intel" src={IntelIc} />
        </div>
        </div>
    )
}

export default CharacterList;
