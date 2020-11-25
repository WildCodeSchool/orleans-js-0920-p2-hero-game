import React from 'react';
import './Rules.css';

export default function Rules () {
    return (
        <div className="rules-container">
            <h2 className="main-rules-title">Règles du jeu</h2>
                <p className="rules-intro">
                     Le but du jeu est très simple : éliminer le héros adverse en lui infligeant des dégâts, avant qu’il ne vous élimine ! Attention, il contre-attaque !
                </p>
                       <div className="rules-cards">
                         <div className="div-rules">
                             <h3 className="rules-title">Choisir un héros</h3>
                                 <p>Commencez par sélectionner votre super héros dans le menu de sélection. Choisissez-le bien ! Ses caractéristiques sont présentées sur la carte, vous y trouverez son type dominant et les dégâts infligés par ses attaques. Chaque héros possède une attaque de chaque type ! La plus puissante étant généralement celle de son type de prédilection. </p>
                        </div>
                        <div className="div-rules">
                             <h3 className="rules-title">Attaquer</h3>
                                 <p>Pour infliger des dégâts au héros adverse, cliquez tout simplement sur le sort d’attaque désiré situé sur la carte de votre héros. Il peut être judicieux de choisir les sorts efficaces contre le type  du héros adverse, pour lui infliger davantage de dégâts. Vous pouvez utiliser une attaque par tour de jeu. Une fois cette attaque lancée, le héross adverse contre-attaque !</p>
                         </div>
                         <div className="div-rules">
                            <h3 className="rules-title">Fin du Combat</h3>
                            <p>
                            Le combat se termine lorsque l’un des super héross en jeu n’a plus de points de vie. Vous pouvez savourer votre victoire ou appuyer sur le bouton “Rejouer” pour relancer une partie ! 
                            </p>
                        </div>
                        </div>
                           
                            <div className="div-rules-reminder">
                            <h3 className="rules-title-reminder">Rappel des éléments</h3>
                            <div className="div-p1">
                            <p className="p1">
                            Chaque héros a un type d'élément de prédilection bien défini. Il existe 4 types d’éléments : 
                            </p>
                            <ul>
                                <li>Force</li>
                                <li>Intelligence</li>
                                <li>Rapidité</li>
                                <li>Résistance</li>
                            </ul>
                            </div>
                            <div className="div-p2">
                            <p className="p2">Chaque type peut être super efficace ou faible face à un autre élément. </p>
                            <ul>
                                <li>L’Intelligence est efficace contre la Résistance, mais faible face à la Force.</li>
                                <li>La Résistance est efficace contre la Rapidité, mais faible face à l'Intelligence.</li>
                                <li>La Rapidité est efficace contre la Force, mais faible face à la Résistance.</li>
                                <li>La Force est efficace contre l’Intelligence, mais faible face à la Rapidité. </li>
                            </ul>
                            <p> Ne vous inquiétez pas ! Un schéma de rappel de l’efficacité des éléments est présent sur la page du combat. 
                               </p>
                            </div>
                        </div>
                        
                    </div>
        

    );
}