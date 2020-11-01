import React from 'react'

function open() {
  const list = document.querySelector(".navbar_rightDiv")
  const menuBtn= document.querySelector(".navbar_burgerMenu");
  const logo = document.querySelector(".navbar_logo")
  const menuBackground = document.querySelector(".navbar_divLogo")

  let result = menuBackground.classList.toggle("open");
  
  if(result){
    list.classList.add('open')
    menuBtn.classList.add('open')
    menuBackground.classList.add('open')
  }else{
    list.classList.remove('open')
    menuBtn.classList.remove('open')
    menuBackground.classList.remove('open')
  }
};

export default open;