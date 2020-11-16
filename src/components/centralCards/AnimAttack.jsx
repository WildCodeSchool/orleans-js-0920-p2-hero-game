import React from 'react'

function Anim() {
    document.querySelector(".DivUser").animate([
        { transform: 'translateX(0vw)' },   
        { transform: 'translateY(-10vh)' },
        
        { transform: 'translateX(30vw)'},
        { transform: 'translateX(0vw)' },
        
      ], {
        easing : 'ease-out', 
        duration: 1000,
        iterations: 1
      });
    
      document.querySelector(".EnemyCard").animate([
        { transform: 'translateX(0vw)' },
        { transform: 'translateX(8vw)' },
        { transform: 'translateX(0vw)' },
        
      ], {
        easing : 'ease-out',
        delay: 430, 
        duration: 500,
        iterations: 1
      });

      function opponent (){
        document.querySelector(".EnemyCard").animate([
          { transform: 'translateX(0vw)' },   
          { transform: 'translateY(-10vh)' },
          
          { transform: 'translateX(-30vw)'},
          { transform: 'translateX(0vw)' },
          
        ], {
          easing : 'ease-out', 
          duration: 1000,
          iterations: 1
        });
      
        document.querySelector(".DivUser").animate([
          { transform: 'translateX(0vw)' },
          { transform: 'translateX(-8vw)' },
          { transform: 'translateX(0vw)' },
          
        ], {
          easing : 'ease-out',
          delay: 430, 
          duration: 500,
          iterations: 1
        });
      }

      setTimeout(opponent, 1500);

      function Damage(){

        const random = Math.random()
        if (random >= 0.75){
          console.log('Intel dmg')
        }
        else if (random < 0.75 && random >= 0.50){
          console.log('strght dmg')
        }
        else if (random < 0.50 && random >= 0.25){
          console.log('speed dmg')
        }
        else {
          console.log('durabi dmg')
        }
      }
      setTimeout(Damage, 1500);

}

export default Anim