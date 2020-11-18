import React from 'react';


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

      let opponentStrenght = localStorage.getItem('strEnemy')
      let opponentSpeed = localStorage.getItem('speEnemy')
      let opponentIntel = localStorage.getItem('cleEnemy')
      let oppnentDura = localStorage.getItem('resEnemy')

      let lifeAlly = localStorage.getItem('lifeAlly')
      let newValue = lifeAlly
      console.log(newValue)
     

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

        let newLife = localStorage.getItem("MajLife")
        console.log("c'est newlife", newLife)

        const random = Math.random()
        if (random >= 0.75){
          newLife = newLife - opponentStrenght
          console.log("c'est newlife dans le calcul", newLife)
          localStorage.setItem('MajLife', newLife)
        }
        else if (random < 0.75 && random >= 0.50){
          newLife = newLife - opponentSpeed
          console.log("c'est newlife dans le calcul", newLife)
          localStorage.setItem('MajLife', newLife)
        }
        else if (random < 0.50 && random >= 0.25){
          newLife= newLife - opponentIntel
          console.log("c'est newlife dans le calcul", newLife)
          localStorage.setItem('MajLife', newLife)
        }
        else {
          newLife = newLife - oppnentDura 
          console.log("c'est newlife dans le calcul", newLife)
          localStorage.setItem('MajLife', newLife)
        }
      }
      setTimeout(Damage, 1500);

}

export default Anim