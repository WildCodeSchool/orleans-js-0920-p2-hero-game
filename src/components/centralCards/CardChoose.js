import React from 'react'

function CardChoose() {

    let imgU = document.querySelector('.UserCard');

    let btnU = document.querySelectorAll('.BtnU');

    const tab1 = [
        imgU.src.indexOf("CaptainMarvel"),
        imgU.src.indexOf("Flash"),
        imgU.src.indexOf("Gamora"),
        imgU.src.indexOf("Greenlantern"),
        imgU.src.indexOf("Groot"),
        imgU.src.indexOf("Harleyquinn"),
        imgU.src.indexOf("Hulk"),
        imgU.src.indexOf("Invisiblewoman"),
        imgU.src.indexOf("Ironman"),
        imgU.src.indexOf("Joker"),
        imgU.src.indexOf("Medusa"),
        imgU.src.indexOf("Mera"),
        imgU.src.indexOf("Poisonivy"),
        imgU.src.indexOf("QuickSilver"),
        imgU.src.indexOf("Spiderman"),
        imgU.src.indexOf("Supergirl"),
        imgU.src.indexOf("Superman"),
        imgU.src.indexOf("Thanos"),
        imgU.src.indexOf("Wolwerine"),
        imgU.src.indexOf("Wonderwoman")
        
    ]

    const tab2 = [
        "CaptainMarvel",
        "Flash",
        "Gamora",
        "Greenlantern",
        "Groot",
        "Harleyquinn",
        "Hulk",
        "Invisiblewoman",
        "Ironman",
        "Joker",
        "Medusa",
        "Mera",
        "Poisonivy",
        "QuickSilver",
        "Spiderman",
        "Supergirl",
        "Superman",
        "Thanos",
        "Wolwerine",
        "Wonderwoman"
    
    ]

    for(let n = 0; n != 20; n++){

        console.log("num",tab1[n])
        if(tab1[n] > 0){
            console.log(btnU)
            for(let i = 0; i < btnU.length; i++){
                console.log(tab2[n])
                btnU[i].classList.add(tab2[n])
            }
            
        } else {

        }

    }

}

export default CardChoose

