import React from 'react'
import './Footer.css';
import Github from './github_icon-icons.com_65450.png';
import WCS from './WCS.png';
import LogoMSH from './Logo_Entier.png';

function Footer() {
    return(
        <div>
            <div className="footer_total">
                <ul className="footer_div">
                    <p className="footer_title">MY SUP'R HEROS</p>
                    <picture><img className="footer_logo" src={LogoMSH} alt="logo MY SUP'R HEROS"/></picture>
                    <a href="#list"><p className="footer_text"> Les Personnages</p></a>
                    <a href="#quizz"><p className="footer_text">Le Quizz</p></a>
                    <a href="#accueil"><p className="footer_text">Le jeu</p></a>
                </ul>
                <ul className="footer_div">
                    <p className="footer_title">WILD CODE SCHOOL</p>
                    <a href="https://www.wildcodeschool.com/fr-FR" target="_blank"><picture><img className="footer_logoWCS" src={WCS} alt="logo wild code school"/></picture></a>
                    <p className="footer_text"> Promo Dev 2020 / 2021</p>
                    <p className="footer_text">Section JavaScript</p>
                </ul>
                <ul className="footer_div">
                    <p className="footer_title">ÉQUIPE DE PRODUCTION</p>
                    <div className="footer_divDev">
                        <a href="https://github.com/Sylvie-Saidi" target="_blank"><picture><img className="footer_logoGithub" src={Github} alt="lien github"/></picture></a>
                        <p className="footer_text">Sylvie SAIDI</p>
                    </div>
                    <div className="footer_divDev">
                        <a href="https://github.com/thomas-ode" target="_blank"><picture><img className="footer_logoGithub" src={Github} alt="lien github"/></picture></a>
                        <p className="footer_text">Thomas ODE</p>
                    </div>
                    <div className="footer_divDev">
                        <a href="https://github.com/florentdesmarets" target="_blank"><picture><img className="footer_logoGithub" src={Github} alt="lien github"/></picture></a>
                        <p className="footer_text">Florent DESMARETS</p>
                    </div>
                    <div className="footer_divDev">
                        <a href="https://github.com/MartyLucas45" target="_blank"><picture><img className="footer_logoGithub" src={Github} alt="lien github"/></picture></a>
                        <p className="footer_text">Marty LUCAS</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Footer
