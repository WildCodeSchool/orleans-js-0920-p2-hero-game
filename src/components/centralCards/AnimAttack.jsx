import React from 'react'

function Anim() {
    document.querySelector(".DivUser").animate([
        { transform: 'translateX(0px)' },   
        { transform: 'translateY(-30px)' },
        
        { transform: 'translateX(600px)'},
        { transform: 'translateX(0px)' },
        
      ], {
        easing : 'ease-out', 
        duration: 1000,
        iterations: 1
      });
    
      document.querySelector(".EnemyCard").animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(30px)' },
        { transform: 'translateX(0px)' },
        
      ], {
        easing : 'ease-out',
        delay: 400, 
        duration: 500,
        iterations: 1
      });

}

export default Anim