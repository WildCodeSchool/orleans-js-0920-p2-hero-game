import React, { useState } from 'react';
import './Quizz.css';
import heroCardMale from './HeroCardMale';
import heroCardFemale from './HeroCardFemale';
import CaptainMarvelCard from '../Quizz/HeroesCards/CaptainMarvel_Story.png';
import GamoraCard from '../Quizz/HeroesCards/Carte_Gamora_Story-min.png';
import HarleyQuinnCard from '../Quizz/HeroesCards/Carte_Harleyquinn_Story-min.png';
import InvisibleWomanCard from '../Quizz/HeroesCards/Carte_Invisiblewoman_Story-min.png';
import WonderWomanCard from '../Quizz/HeroesCards/Carte_Wonderwoman_Story-min.png'
import FlashCard from '../Quizz/HeroesCards/Carte_Flash_Story-min.png';
import IronmanCard from '../Quizz/HeroesCards/Carte_Ironman_Story-min.png';
import JokerCard from '../Quizz/HeroesCards/Carte_Joker_Story-min.png';
import SpidermanCard from '../Quizz/HeroesCards/Carte_Spiderman_Story-min.png';
import SupermanCard from '../Quizz/HeroesCards/Carte_Superman_Story-min.png';

function Quizz() {

    const questions = [
        {
            questionText: 'Es-tu un homme ou une femme ?',
            answerOptions: [
                { answerText: 'Homme', isCorrect: "homme"},
                { answerText: 'Femme', isCorrect: "femme" },],
        },
        {
            questionText: 'Un voyou embête une fille dans une rue animée du centre-ville! Que faîtes-vous ?',
            answerOptions: [
                { answerText: 'Je l\'aide sans hésiter. ', isCorrect: true},
                { answerText: 'Je l\'aide mais j\'ai peur', isCorrect: false },
                { answerText: 'J\'apelle la police', isCorrect: true},
                { answerText: 'Je ne fais rien.', isCorrect: false },
            ],
        },
        {
            questionText: 'Vous recevez un paquet cadeau! Mais vous ne savez pas ce qu\'il y a dedans. Que faîtes-vous ?',
            answerOptions: [
                { answerText: 'Je l\'ouvre de suite.', isCorrect: true },
                { answerText: 'Je l\'ouvre plus tard.', isCorrect: false },
                { answerText: 'Quelqu\'un me l\'ouvre.', isCorrect: false },
                { answerText: 'Je ne l\'ouvre pas.', isCorrect: true},
            ],
        },
        {
            questionText: 'C\'est le week-end, mais personne ne veut jouer avec vous... Que faîtes-vous ?',
            answerOptions: [
                { answerText: 'Une excursion.', isCorrect: true },
                { answerText: 'Je traîne sans but.', isCorrect: false },
                { answerText: 'Je me recroqueville.', isCorrect: false },
                { answerText: 'Je joue seul.', isCorrect: true },
            ],
        },
        {
            questionText: 'Vous avez un examen très important demain ! Que faîtes-vous ?',
            answerOptions: [
                { answerText: 'J\'étudie toute la nuit.', isCorrect: true},
                { answerText: 'Je ne m\'en fais pas, tout ira bien.', isCorrect: true },
                { answerText: 'Un examen ? Comme je suis malade !', isCorrect: false },

            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0); const handleAnswerOptionClick = (isCorrect) => {

        if(isCorrect=="homme"){
            setScore(score+110);
        }
        else if(isCorrect=="femme"){
            setScore(score+1010);
        }
        else if (isCorrect) {
            setScore(score + 110);
        }
        else {
            setScore(score + 10);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }


    };

    let resultHero = "";
    
    console.log(setShowScore)
    console.log(score)
    console.log(resultHero)



    if (score > 1000 && score < 1100) {
        resultHero = heroCardFemale.find(hero => hero.id === 1);
    } else if (score > 1100&& score < 1200) {
        resultHero = heroCardFemale.find(hero => hero.id === 2);
    } else if (score > 1200 && score < 1300) {
        resultHero = heroCardFemale.find(hero => hero.id === 3);
    } else if (score > 1300 && score < 1400) {
        resultHero = heroCardFemale.find(hero => hero.id === 4);
    } else if (score > 1400 ) {
        resultHero = heroCardFemale.find(hero => hero.id === 5);
    } else if (score > 0 && score < 100) {
        resultHero = heroCardMale.find(hero => hero.id === 1);
    } else if (score > 100&& score < 200) {
        resultHero = heroCardMale.find(hero => hero.id === 2);
    } else if (score > 200 && score < 300) {
        resultHero = heroCardMale.find(hero => hero.id === 3);
    } else if (score > 300 && score < 400) {
        resultHero = heroCardMale.find(hero => hero.id === 4);
    } else if (score > 400) {
        resultHero = heroCardMale.find(hero => hero.id === 5);
    }

    


    return (
        <div id="quizz" className='quizz'>
            <h2 className="Quizz-title">Quel héro es-tu ? </h2>
            {showScore ? (

                <div className='score-section'>
                    <p>Tu es ... {resultHero.name} !</p>
                    <img src={resultHero.img} />

                </div>
                
            ) : (
                    <div className="quizz-container">
                        
                        <div className='question-section'>
                            <div className='question-count'>
                                <span className="question-count-span">Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </div>
                )}
        </div>
    );
}
export default Quizz;