const letterList = document.querySelectorAll('.greeting__letter');
const menuBtn = document.querySelector('.menu');
const menuBtnClose = document.querySelector('.header__close');
const header = document.querySelector('.header');

letterList.forEach((letter, item)=>{
  const count = item/9
  letter.style.setProperty('animation', `loadingLetter 0.5s linear ${count}s forwards`)
});

const openHeaderMenu = () => {
  header.style.setProperty('display', 'flex');
};

const closeHeaderMenu = () =>{
  header.style.removeProperty('display');
};

menuBtn.addEventListener('click', openHeaderMenu);
menuBtnClose.addEventListener('click', closeHeaderMenu);
