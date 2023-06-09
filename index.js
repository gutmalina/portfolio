const letterList = document.querySelectorAll('.greeting__letter');
const menuBtn = document.querySelector('.menu');
const menuBtnClose = document.querySelector('.header__close');
const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.header__link');
const background = document.querySelector('.background');
const boxBottom = document.querySelector('.box_bottom');
const boxCenter = document.querySelector('.box_center');
const boxtop = document.querySelector('.box_top');
const boxList = document.querySelectorAll('.box');
const cardsSkillsList = document.querySelectorAll('.skills__card');
const mousePosInCard = {};
const mousePos = {};
let timer;

/** анимация приветствия */
letterList.forEach((letter, item)=>{
  const count = item/9
  letter.style.setProperty('animation', `loadingLetter 0.5s linear ${count}s forwards`)
});

const openHeaderMenu = () => {
  header.style.setProperty('display', 'flex');
  menuLinks.forEach((menuLink=>menuLink.addEventListener('click', closeHeaderMenu)))

};

const closeHeaderMenu = () =>{
  header.style.removeProperty('display');
  menuLinks.forEach((menuLink=>menuLink.removeEventListener('click', closeHeaderMenu)))
};


menuBtn.addEventListener('click', openHeaderMenu);
menuBtnClose.addEventListener('click', closeHeaderMenu);

/** остановка движения мышки */
const mouseStopped = () => {
  [...boxList].map(box => {
    box.style.removeProperty('background-color');
  })
};

/** проступающий фон при движении мышки */
background.addEventListener('mousemove', (e)=>{
  [...boxList].map(box => {
    box.style.setProperty('background-color', 'transparent');
    box.style.setProperty('transition', 'background-color 0.7s ease-in');
  })

  mousePos.x = e.clientX - 150 + 'px';
  mousePos.y = e.clientY - 30 + 'px';

  const gradientBottom = "radial-gradient(circle at " + mousePos.x + ' ' + mousePos.y + ", transparent 5%, #1d1d1d 25%)";
  const gradientCenter = "radial-gradient(circle at " + mousePos.x + ' ' + mousePos.y + ", transparent, #1d1d1d 20%)";
  const gradientTop = "radial-gradient(circle at " + mousePos.x + ' ' + mousePos.y + ", transparent -5%, #1d1d1d 15%)";
  boxBottom.style.setProperty('background-image', gradientBottom);
  boxCenter.style.setProperty('background-image', gradientCenter);
  boxtop.style.setProperty('background-image', gradientTop);

  clearTimeout(timer);
  timer = setTimeout(mouseStopped, 3000);
});

/** проступающий фон при клике */
background.addEventListener('click', (e) => {
  mousePos.x = e.clientX - 150 + 'px';
  mousePos.y = e.clientY - 30 + 'px';
  const gradientBottom = "radial-gradient(circle at " + mousePos.x + ' ' + mousePos.y + ", transparent, #1d1d1d)";
  const gradientCenter = "radial-gradient(circle at " + mousePos.x + ' ' + mousePos.y + ", transparent, #1d1d1d)";
  const gradientTop = "radial-gradient(circle at " + mousePos.x + ' ' + mousePos.y + ", transparent, #1d1d1d)";
  boxBottom.style.setProperty('background-image', gradientBottom);
  boxCenter.style.setProperty('background-image', gradientCenter);
  boxtop.style.setProperty('background-image', gradientTop);
});

/** фон при наведении на карточки skills */
cardsSkillsList.forEach(card=>{
  const cardShadow = card.querySelector('.skills__shadow')
  let widthCard = card.offsetWidth;
  let heightCard = card.offsetHeight;
  card.addEventListener('mousemove', (e) => {

    mousePosInCard.x = e.offsetX + 'px';
    mousePosInCard.y = e.offsetY + 'px';

    cardShadow.classList.add('skills__shadow_active');

    cardShadow.style.left = mousePosInCard.x;
    cardShadow.style.top = mousePosInCard.y;

    let x = (-((e.offsetY - (widthCard/2))/3)/3).toFixed(2);
    let y = (((e.offsetX - (heightCard/2))/3)/3).toFixed(2);
    card.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  });

  card.addEventListener('mouseleave', (e)=>{
    cardShadow.classList.remove('skills__shadow_active');
    card.style.transform = "";
  })
});
