import React from 'react';


function Anim3() {
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

      let speed = localStorage.getItem('speAlly')

      function allyDamage(){
        let newLifeEnn = localStorage.getItem('MajLifeEnn')

        newLifeEnn = newLifeEnn - speed
        localStorage.setItem('MajLifeEnn', newLifeEnn)
        let lifeBar = ""
        lifeBar = document.querySelector(".healthBarValueCPU") 
        let endCalcul = 0
        endCalcul = (parseInt(localStorage.getItem("MajLifeEnn")) * 100) / (parseInt(localStorage.getItem("lifeEnn")))
        lifeBar.style.width = `${endCalcul}%` 
      }

      setTimeout(allyDamage, 500)

      let opponentStrenght = localStorage.getItem('strEnemy')
      let opponentSpeed = localStorage.getItem('speEnemy')
      let opponentIntel = localStorage.getItem('cleEnemy')
      let oppnentDura = localStorage.getItem('resEnemy')

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

        const random = Math.random()
        if (random >= 0.75){
          newLife = newLife - opponentStrenght
          localStorage.setItem('MajLife', newLife)
          let lifeBar = ""
          lifeBar = document.querySelector(".healthBarValue") 
          let endCalcul = 0
          endCalcul = (parseInt(localStorage.getItem("MajLife")) * 100) / (parseInt(localStorage.getItem("lifeAlly")))
          lifeBar.style.width = `${endCalcul}%` 
        }
        else if (random < 0.75 && random >= 0.50){
          newLife = newLife - opponentSpeed
          localStorage.setItem('MajLife', newLife)
          let lifeBar = ""
          lifeBar = document.querySelector(".healthBarValue") 
          let endCalcul = 0
          endCalcul = (parseInt(localStorage.getItem("MajLife")) * 100) / (parseInt(localStorage.getItem("lifeAlly")))
          lifeBar.style.width = `${endCalcul}%`
        }
        else if (random < 0.50 && random >= 0.25){
          newLife= newLife - opponentIntel
          localStorage.setItem('MajLife', newLife)
          let lifeBar = ""
          lifeBar = document.querySelector(".healthBarValue") 
          let endCalcul = 0
          endCalcul = (parseInt(localStorage.getItem("MajLife")) * 100) / (parseInt(localStorage.getItem("lifeAlly")))
          lifeBar.style.width = `${endCalcul}%`
        }
        else {
          newLife = newLife - oppnentDura 
          localStorage.setItem('MajLife', newLife)
          let lifeBar = ""
          lifeBar = document.querySelector(".healthBarValue") 
          let endCalcul = 0
          endCalcul = (parseInt(localStorage.getItem("MajLife")) * 100) / (parseInt(localStorage.getItem("lifeAlly")))
          lifeBar.style.width = `${endCalcul}%`
        }
      }
      setTimeout(Damage, 2000);

      function turn(){
        let text = document.querySelector('.newTurn');
        let logo = document.querySelector('.LogoGame');

        text.style.display = 'block'
        logo.style.marginTop = '-85px'
      }
      setTimeout(turn, 3000)

      function endTurn() {
        let text = document.querySelector('.newTurn');
        let logo = document.querySelector('.LogoGame');

        text.style.display = 'none'
        logo.style.marginTop = '0px'
      }
      setTimeout(endTurn, 4000)

      function victory (){
        let newLifeEnn = parseInt(localStorage.getItem('MajLifeEnn'))
        let back = document.querySelector('.endGame')
        let win = document.querySelector('.victory')
        if (newLifeEnn <= 0){
          back.style.display = 'flex'
          win.style.display = 'flex'
        }
        else{}
      }
      setTimeout(victory, 1000)

      function defeat (){
        let newLifeEnn = parseInt(localStorage.getItem('MajLife'))
        let back = document.querySelector('.endGame')
        let defeat = document.querySelector('.defeat')
        if (newLifeEnn <= 0){
          back.style.display = 'flex'
          defeat.style.display = 'flex'
        }
        else{}
      }

      setTimeout(defeat, 2500)

}

export default Anim3