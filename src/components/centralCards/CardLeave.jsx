import React from 'react'


function CardLeave(){

    let btnU = document.querySelectorAll('.BtnU');
    
    for(let i = 0; i < btnU.length; i++){
        btnU[i].classList.remove(btnU[i].classList[2])
    }

}

export default CardLeave;