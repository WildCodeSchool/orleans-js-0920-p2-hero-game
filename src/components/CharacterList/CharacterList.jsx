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


const CharacterList = () => {

    

        const [quickSilver, setQuicksilver]= useState(false)
        const changeQuicksilver=() => setQuicksilver(!quickSilver)
        const [quickSilverHist, setQuicksilverHist]= useState(false)
        const changeQuicksilverHist=() => setQuicksilverHist(!quickSilverHist)
        const resetQuicksilver =() => setQuicksilver(!quickSilver) && setQuicksilverHist(!quickSilverHist)

        const [superman, setSuperman]= useState(false)
        const changeSuperman=() => setSuperman(!superman)
        const [supermanHist, setSupermanHist]= useState(false)
        const changeSupermanHist=() => setSupermanHist(!supermanHist)
        const resetSuperman =() => setSuperman(!superman) && setSupermanHist(!supermanHist)

        const [supergirl, setSupergirl]= useState(false)
        const changeSupergirl=() => setSupergirl(!supergirl)
        const [supergirlHist, setSupergirlHist]= useState(false)
        const changeSupergirlHist=() => setSupergirlHist(!supergirlHist)
        const resetSupergirl =() => setSupergirl(!supergirl) && setSupergirlHist(!supergirlHist)

        const [mera, setMera]= useState(false)
        const changeMera=() => setMera(!mera)
        const [meraHist, setMeraHist]= useState(false)
        const changeMeraHist=() => setMeraHist(!meraHist)
        const resetMera =() => setMera(!mera) && setMeraHist(!meraHist)

        const [flash, setFlash]= useState(false)
        const changeFlash=() => setFlash(!flash)
        const [flashHist, setFlashHist]= useState(false)
        const changeFlashHist=() => setFlashHist(!flashHist)
        const resetFlash =() => setFlash(!flash) && setFlashHist(!flashHist)

        const [captainmarvel, setCaptainMarvel]= useState(false)
        const changeCaptainMarvel=() => setCaptainMarvel(!captainmarvel)
        const [captainmarvelHist, setCaptainmarvelHist]= useState(false)
        const changeCaptainmarvelHist=() => setCaptainmarvelHist(!captainmarvelHist)
        const resetCaptainmarvel =() => setCaptainMarvel(!captainmarvel) && setCaptainmarvelHist(!captainmarvelHist)

        const [groot, setGroot]= useState(false)
        const changeGroot=() => setGroot(!groot)
        const [grootHist, setGrootHist]= useState(false)
        const changeGrootHist=() => setGrootHist(!grootHist)
        const resetGroot =() => setGroot(!groot) && setGrootHist(!grootHist)

        const [gamora, setGamora]= useState(false)
        const changeGamora=() => setGamora(!gamora)
        const [gamoraHist, setGamoraHist]= useState(false)
        const changeGamoraHist=() => setGamoraHist(!gamoraHist)
        const resetGamora =() => setGamora(!gamora) && setGamoraHist(!gamoraHist)

        const [ironman, setIronman]= useState(false)
        const changeIronman=() => setIronman(!ironman)
        const [ironmanHist, setIronmanHist]= useState(false)
        const changeIronmanHist=() => setIronmanHist(!ironmanHist)
        const resetIronman =() => setIronman(!ironman) && setIronmanHist(!ironmanHist)

        const [greenlantern, setGreenLantern]= useState(false)
        const changeGreenLantern=() => setGreenLantern(!greenlantern)
        const [greenlanterHist, setGreenlanternHist]= useState(false)
        const changeGreenlanternHist=() => setGreenlanternHist(!greenlanterHist)
        const resetGreenlantern=() => setGreenLantern(!greenlantern) && setGreenlanternHist(!greenlanterHist)

        const [hulk, setHulk]= useState(false)
        const changeHulk=() => setHulk(!hulk)
        const [hulkHist, setHulkHist]= useState(false)
        const changeHulkHist=() => setHulkHist(!hulkHist)
        const resetHulk =() => setHulk(!hulk) && setHulkHist(!hulkHist)

        const [invisiblewoman, setInvisiblewoman]= useState(false)
        const changeInvisiblewoman=() => setInvisiblewoman(!invisiblewoman)
        const [invisiblewomanHist, setInvisiblewomanHist]= useState(false)
        const changeInvisiblewomanHist=() => setInvisiblewomanHist(!invisiblewomanHist)
        const resetInvisiblewoman =() => setInvisiblewoman(!invisiblewoman) && setInvisiblewomanHist(!invisiblewomanHist)

        const [wonderwoman, setWonderwoman]= useState(false)
        const changeWonderwoman=() => setWonderwoman(!wonderwoman)
        const [wonderwomanHist, setWonderwomanHist]= useState(false)
        const changeWonderwomanHist=() => setWonderwomanHist(!wonderwomanHist)
        const resetWonderwoman =() => setWonderwoman(!wonderwoman) && setWonderwomanHist(!wonderwomanHist)

        const [wolwerine, setWolwerine]= useState(false)
        const changeWolwerine=() => setWolwerine(!wolwerine)
        const [wolwerineHist, setWolwerineHist]= useState(false)
        const changeWolwerineHist=() => setWolwerineHist(!wolwerineHist)
        const resetWolwerine =() => setWolwerine(!wolwerine) && setWolwerineHist(!wolwerineHist)

        const [thanos, setThanos]= useState(false)
        const changeThanos=() => setThanos(!thanos)
        const [thanosHist, setThanosHist]= useState(false)
        const changeThanosHist=() => setThanosHist(!thanosHist)
        const resetThanos =() => setThanos(!thanos) && setThanosHist(!thanosHist)

        const [joker, setJoker]= useState(false)
        const changeJoker=() => setJoker(!joker)
        const [jokerHist, setJokerHist]= useState(false)
        const changeJokerHist=() => setJokerHist(!jokerHist)
        const resetJoker =() => setJoker(!joker) && setJokerHist(!jokerHist)

        const [harleyquinn, setHarleyquinn]= useState(false)
        const changeHarleyquinn=() => setHarleyquinn(!harleyquinn)
        const [harleyquinnHist, setHarleyquinnHist]= useState(false)
        const changeHarleyquinnHist=() => setHarleyquinnHist(!harleyquinnHist)
        const resetHarleyquinn =() => setHarleyquinn(!harleyquinn) && setHarleyquinnHist(!harleyquinnHist)

        const [poisonivy, setPoisonIvy]= useState(false)
        const changePoisonIvy=() => setPoisonIvy(!poisonivy)
        const [poisonivyHist, setPoisonivyHist]= useState(false)
        const changePoisonivyHist=() => setPoisonivyHist(!poisonivyHist)
        const resetPoisonivy =() => setPoisonIvy(!poisonivy) && setPoisonivyHist(!poisonivyHist)

        const [medusa, setMedusa]= useState(false)
        const changeMedusa=() => setMedusa(!medusa)
        const [medusaHist, setMedusaHist]= useState(false)
        const changeMedusaHist=() => setMedusaHist(!medusaHist)
        const resetMedusa =() => setMedusa(!medusa) && setMedusaHist(!medusaHist)

        const [spiderman, setSpiderman]= useState(false)
        const changeSpiderman=() => setSpiderman(!spiderman)
        const [spidermanHist, setSpidermanHist]= useState(false)
        const changeSpidermanHist=() => setSpidermanHist(!spidermanHist)
        const resetSpiderman =() => setSpiderman(!spiderman) && setSpidermanHist(!spidermanHist)
        




    return (
        <div id="list">
        <div id="character" className="list">

            <div className="text-under-card1"></div>
            <div className="text-under-card2">Clique sur une icône pour afficher l'histoire du Personnage, cliques une deuxième fois sur l'icône pour enlever l'affichage. </div>

            <img className="history" src="" />
            <img className="card" src="" />
            <img id="icons" className="one" src={QuickSilverIc} onMouseEnter={changeQuicksilver} onClick={changeQuicksilverHist} onMouseLeave={resetQuicksilver} />
                {quickSilver && (
                    <img className="card" src={QuickSilverStat} />
                )}
                {quickSilverHist && (
                    <img className="history" src={QuickSilverHist} />
                )}
            <img id="icons" className="two" src={SuperManIc}  onMouseEnter={changeSuperman}  onClick={changeSupermanHist} onMouseLeave={resetSuperman} />
                {superman && (
                    <img className="card" src={SuperManStat} />
                )}
                {supermanHist && (
                    <img className="card" src={SuperManHist} />
                )}
            <img id="icons" className="five" src={SuperGirlIc} onMouseEnter={changeSupergirl} onClick={changeSupergirlHist} onMouseLeave={resetSupergirl} />
                {supergirl && (
                    <img className="card" src={SuperGirlStat} />
                )}
                {supergirlHist && (
                    <img className="card" src={SuperGirlHist} />
                )}
            <img id="icons" className="six" src={MeraIc} onMouseEnter={changeMera} onClick={changeMeraHist} onMouseLeave={resetMera} />
                {mera && (
                    <img className="card" src={MeraStat} />
                )}
                {meraHist && (
                    <img className="card" src={MeraHist} />
                )}
            <img id="icons" className="seven" src={FlashIc} onMouseEnter={changeFlash} onClick={changeFlashHist} onMouseLeave={resetFlash} />
                {flash && (
                    <img className="card" src={FlashStat} />
                )}
                {flashHist && (
                    <img className="card" src={FlashHist} />
                )}

            <img id="icons" className="three" src={CaptainMarvelIc} onMouseEnter={changeCaptainMarvel} onClick={changeCaptainmarvelHist} onMouseLeave={resetCaptainmarvel} />
                {captainmarvel && (
                    <img className="card" src={CaptainMarvelStat} />
                )}
                {captainmarvelHist && (
                    <img className="card" src={CaptainMarvelHist} />
                )}
            <img id="icons" className="four" src={GrootIc} onMouseEnter={changeGroot} onClick={changeGrootHist} onMouseLeave={resetGroot} />
                {groot && (
                    <img className="card" src={GrootStat} />
                )}
                {grootHist && (
                    <img className="card" src={GrootHist} />
                )}
            <img id="icons" className="eight" src={GamoraIc} onMouseEnter={changeGamora} onClick={changeGamoraHist} onMouseLeave={resetGamora} />
                {gamora && (
                    <img className="card" src={GamoraStat} />
                )}
                {gamoraHist && (
                    <img className="card" src={GamoraHist} />
                )}
            <img id="icons" className="nine" src={IronManIc} onMouseEnter={changeIronman} onClick={changeIronmanHist} onMouseLeave={resetIronman} />
                {ironman && (
                    <img className="card" src={IronManStat} />
                )}
                {ironmanHist && (
                    <img className="card" src={IronManHist} />
                )}
            <img id="icons" className="ten" src={GreenlanternIc} onMouseEnter={changeGreenLantern} onClick={changeGreenlanternHist} onMouseLeave={resetGreenlantern} />
                {greenlantern && (
                    <img className="card" src={GreenLanternStat} />
                )}
                {greenlanterHist && (
                    <img className="card" src={GreenLanternHist} />
                )}

            <img id="icons" className="eleven" src={HulkIc} onMouseEnter={changeHulk} onClick={changeHulkHist} onMouseLeave={resetHulk} />
                {hulk && (
                    <img className="card" src={HulkStat} />
                )}
                {hulkHist && (
                    <img className="card" src={HulkHist} />
                )}
            <img id="icons" className="twelve" src={InvisibleWomanIc} onMouseEnter={changeInvisiblewoman} onClick={changeInvisiblewomanHist} onMouseLeave={resetInvisiblewoman} />
                {invisiblewoman && (
                    <img className="card" src={InvisibleWomanStat} />
                )}
                {invisiblewomanHist && (
                    <img className="card" src={InvisibleWomanHist} />
                )}
            <img id="icons" className="thirteen" src={WonderWomanIc} onMouseEnter={changeWonderwoman} onClick={changeWonderwomanHist} onMouseLeave={resetWonderwoman} />
                {wonderwoman && (
                    <img className="card" src={WonderWomanStat} />
                )}
                {wonderwomanHist && (
                    <img className="card" src={WonderWomanHist} />
                )}
            <img id="icons" className="seventeen" src={WolwerineIc} onMouseEnter={changeWolwerine} onClick={changeWolwerineHist} onMouseLeave={resetWolwerine} />
                {wolwerine && (
                    <img className="card" src={WolwerineStat} />
                )}
                {wolwerineHist && (
                    <img className="card" src={WolwerineHist} />
                )}
            <img id="icons" className="eighteen" src={ThanosIc} onMouseEnter={changeThanos} onClick={changeThanosHist} onMouseLeave={resetThanos} />
                {thanos && (
                    <img className="card" src={ThanosStat} />
                )}
                {thanosHist && (
                    <img className="card" src={ThanosHist} />
                )}

            <img id="icons" className="sixteen" src={JokerIc} onMouseEnter={changeJoker} onClick={changeJokerHist} onMouseLeave={resetJoker} />
                {joker && (
                    <img className="card" src={JokerStat} />
                )}
                {jokerHist && (
                    <img className="card" src={JokerHist} />
                )}
            <img id="icons" className="fifteen" src={HarleyquinnIc} onMouseEnter={changeHarleyquinn} onClick={changeHarleyquinnHist} onMouseLeave={resetHarleyquinn} />
                {harleyquinn && (
                    <img className="card" src={HarleyQuinnStat} />
                )}
                {harleyquinnHist && (
                    <img className="card" src={HarleyQuinnHist} />
                )}
            <img id="icons" className="fourteen" src={PoisonIvyIc} onMouseEnter={changePoisonIvy} onClick={changePoisonivyHist} onMouseLeave={resetPoisonivy} />
                {poisonivy && (
                    <img className="card" src={PoisonIvyStat} />
                )}
                {poisonivyHist && (
                    <img className="card" src={PoisonIvyHist} />
                )}
            <img id="icons" className="nineteen" src={MedusaIc} onMouseEnter={changeMedusa} onClick={changeMedusaHist} onMouseLeave={resetMedusa} />
                {medusa && (
                    <img className="card" src={MedusaStat} />
                )}
                {medusaHist && (
                    <img className="card" src={MedusaHist} />
                )}
            <img id="icons" className="twenty" src={SpiderManIc} onMouseEnter={changeSpiderman} onClick={changeSpidermanHist} onMouseLeave={resetSpiderman} />
                {spiderman && (
                    <img className="card" src={SpiderManStat} />
                )}
                {spidermanHist && (
                    <img className="card" src={SpiderManHist} />
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