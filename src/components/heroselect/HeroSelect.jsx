import React, {useEffect, useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './HeroSelect.css';

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

import CaptainMarvelHist from '../assets/Carte_CaptainMarvel_Story-min.png';
import FlashHist from '../assets/Carte_Flash_Story-min.png';
import GamoraHist from '../assets/Carte_Gamora_Story-min.png';
import GreenLanternHist from '../assets/Carte_Greenlantern_Story-min.png';
import GrootHist from '../assets/Carte_Groot_Story-min.png';
import HarleyQuinnHist from '../assets/Carte_Harleyquinn_Story-min.png';
import HulkHist from '../assets/Carte_Hulk_Story-min.png';
import InvisibleWomanHist from '../assets/Carte_Invisiblewoman_Story-min.png';
import IronManHist from '../assets/Carte_Ironman_Story-min.png';
import JokerHist from '../assets/Carte_Joker_Story-min.png';
import MedusaHist from '../assets/Carte_Medusa_Story-min.png';
import MeraHist from '../assets/Carte_Mera_Story-min.png';
import PoisonIvyHist from '../assets/Carte_Poisonivy_Story-min.png';
import QuickSilverHist from '../assets/Carte_Quicksilver_Story-min.png';
import SpiderManHist from '../assets/Carte_Spiderman_Story-min.png';
import SuperGirlHist from '../assets/Carte_Supergirl_Story-min.png';
import SuperManHist from '../assets/Carte_Superman_Story-min.png';
import ThanosHist from '../assets/Carte_Thanos_Story-min.png';
import WolwerineHist from '../assets/Carte_Wolwerine_Story-min.png';
import WonderWomanHist from '../assets/Carte_Wonderwoman_Story-min.png';


const HeroSelect = () => {

        let buttonSelect = ""

        const [quickSilver, setQuicksilver]= useState(false)
        const changeQuicksilver=() =>  setQuicksilver(!quickSilver)
        
        useEffect(() => {
            if(quickSilver){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[quickSilver])
     
        const [superman, setSuperman]= useState(false)
        const changeSuperman=() => setSuperman(!superman)
        
        useEffect(() => {
            if(superman){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[superman])
        const [supergirl, setSupergirl]= useState(false)
        const changeSupergirl=() => setSupergirl(!supergirl)
        useEffect(() => {
            if(supergirl){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[supergirl])
        const [mera, setMera]= useState(false)
        const changeMera=() => setMera(!mera)
        useEffect(() => {
            if(mera){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[mera])
        const [flash, setFlash]= useState(false)
        const changeFlash=() => setFlash(!flash)
        useEffect(() => {
            if(flash){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[flash])
        
        const [captainmarvel, setCaptainMarvel]= useState(false)
        const changeCaptainMarvel=() => setCaptainMarvel(!captainmarvel)
        useEffect(() => {
            if(captainmarvel){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[captainmarvel])
        
        const [groot, setGroot]= useState(false)
        const changeGroot=() => setGroot(!groot)
        useEffect(() => {
            if(groot){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[groot])

        const [gamora, setGamora]= useState(false)
        const changeGamora=() => setGamora(!gamora)
        useEffect(() => {
            if(gamora){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[gamora])

        const [ironman, setIronman]= useState(false)
        const changeIronman=() => setIronman(!ironman)
        useEffect(() => {
            if(ironman){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[ironman])

        const [greenlantern, setGreenLantern]= useState(false)
        const changeGreenLantern=() => setGreenLantern(!greenlantern)
        useEffect(() => {
            if(greenlantern){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[greenlantern])

        const [hulk, setHulk]= useState(false)
        const changeHulk=() => setHulk(!hulk)
        useEffect(() => {
            if(hulk){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[hulk])

        const [invisiblewoman, setInvisiblewoman]= useState(false)
        const changeInvisiblewoman=() => setInvisiblewoman(!invisiblewoman)
        useEffect(() => {
            if(invisiblewoman){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[invisiblewoman])

        const [wonderwoman, setWonderwoman]= useState(false)
        const changeWonderwoman=() => setWonderwoman(!wonderwoman)
        useEffect(() => {
            if(wonderwoman){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[wonderwoman])

        const [wolwerine, setWolwerine]= useState(false)
        const changeWolwerine=() => setWolwerine(!wolwerine)
        useEffect(() => {
            if(wolwerine){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[wolwerine])

        const [thanos, setThanos]= useState(false)
        const changeThanos=() => setThanos(!thanos)
        useEffect(() => {
            if(thanos){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[thanos])

        const [joker, setJoker]= useState(false)
        const changeJoker=() => setJoker(!joker)
        useEffect(() => {
            if(joker){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[joker])

        const [harleyquinn, setHarleyquinn]= useState(false)
        const changeHarleyquinn=() => setHarleyquinn(!harleyquinn)
        useEffect(() => {
            if(harleyquinn){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[harleyquinn])

        const [poisonivy, setPoisonIvy]= useState(false)
        const changePoisonIvy=() => setPoisonIvy(!poisonivy)
        useEffect(() => {
            if(poisonivy){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[poisonivy])

        const [medusa, setMedusa]= useState(false)
        const changeMedusa=() => setMedusa(!medusa)
        useEffect(() => {
            if(medusa){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[medusa])

        const [spiderman, setSpiderman]= useState(false)
        const changeSpiderman=() => setSpiderman(!spiderman)
        useEffect(() => {
            if(spiderman){
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "flex"
            } else {
                buttonSelect = document.querySelector("h6")
                buttonSelect.style.display = "none"
            }
        },[spiderman])

    return (
        <div id="list">

<div class="hero"> 
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>

        <div id="character" className="list">

            <div className="text-under-card1"></div>
            <div className="text-under-card2">Sélectionnez votre Hero et confirmez votre choix pour commencer la partie !</div>
            <Link className="buttonGo" to="/game"><button className="buttonGo"><h6>Incarner ce Hero</h6></button> </Link>
            <img className="history" src="" />
            <img className="card" src="" />
            <img id="icons" className="one" src={QuickSilverIc}  onClick={changeQuicksilver}  />
                {quickSilver && (
                    <img className="card" src={QuickSilverStat} />
                )}
           
            <img id="icons" className="two" src={SuperManIc}  onClick={changeSuperman}  />
                {superman && (
                    <img className="card" src={SuperManStat} />
                )}
            <img id="icons" className="five" src={SuperGirlIc}  onClick={changeSupergirl} />
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
            <img id="icons" className="three" src={CaptainMarvelIc}  onClick={changeCaptainMarvel} />
                {captainmarvel && (
                    <img className="card" src={CaptainMarvelStat} />
                )}
            <img id="icons" className="four" src={GrootIc}  onClick={changeGroot}  />
                {groot && (
                    <img className="card" src={GrootStat} />
                )}
            <img id="icons" className="eight" src={GamoraIc} onClick={changeGamora} />
                {gamora && (
                    <img className="card" src={GamoraStat} />
                )}
            <img id="icons" className="nine" src={IronManIc}onClick={changeIronman}/>
                {ironman && (
                    <img className="card" src={IronManStat} />
                )}
            <img id="icons" className="ten" src={GreenlanternIc}  onClick={changeGreenLantern} />
                {greenlantern && (
                    <img className="card" src={GreenLanternStat} />
                )}

            <img id="icons" className="eleven" src={HulkIc}onClick={changeHulk} />
                {hulk && (
                    <img className="card" src={HulkStat} />
                )}
               
            <img id="icons" className="twelve" src={InvisibleWomanIc} onClick={changeInvisiblewoman}/>
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
               
            <img id="icons" className="eighteen" src={ThanosIc}  onClick={changeThanos} />
                {thanos && (
                    <img className="card" src={ThanosStat} />
                )}

            <img id="icons" className="sixteen" src={JokerIc}  onClick={changeJoker}  />
                {joker && (
                    <img className="card" src={JokerStat} />
                )}
                
            <img id="icons" className="fifteen" src={HarleyquinnIc}  onClick={changeHarleyquinn} />
                {harleyquinn && (
                    <img className="card" src={HarleyQuinnStat} />
                )}
               
            <img id="icons" className="fourteen" src={PoisonIvyIc} onClick={changePoisonIvy} />
                {poisonivy && (
                    <img className="card" src={PoisonIvyStat} />
                )}
              
            <img id="icons" className="nineteen" src={MedusaIc} onClick={changeMedusa}  />
                {medusa && (
                    <img className="card" src={MedusaStat} />
                )}
              
            <img id="icons" className="twenty" src={SpiderManIc}  onClick={changeSpiderman} />
                {spiderman && (
                    <img className="card" src={SpiderManStat} />
                )}
              

            <img className="strenght" src={StrenghtIc} />
            <img className="speed" src={SpeedIc} />
            <img className="durabi" src={DurabilityIc} />
            <img className="intel" src={IntelIc} />

        </div>
        </div>
        </div>
    )
}

export default HeroSelect;