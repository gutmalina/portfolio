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

const mouseStopped = () => {
  [...boxList].map(box => {
    box.style.removeProperty('background-color');
  })
}

background.addEventListener('mousemove', (e)=>{
  [...boxList].map(box => {
    box.style.setProperty('background-color', 'transparent');
    box.style.setProperty('transition', 'background-color 1.5s ease-in');
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
})

background.addEventListener('click', (e) => {
  mousePos.x = e.clientX - 150 + 'px';
  mousePos.y = e.clientY - 30 + 'px';
  const gradientBottom = "radial-gradient(circle at " + mousePos.x + ' ' + mousePos.y + ", transparent, #1d1d1d)";
  const gradientCenter = "radial-gradient(circle at " + mousePos.x + ' ' + mousePos.y + ", transparent, #1d1d1d)";
  const gradientTop = "radial-gradient(circle at " + mousePos.x + ' ' + mousePos.y + ", transparent, #1d1d1d)";
  boxBottom.style.setProperty('background-image', gradientBottom);
  boxCenter.style.setProperty('background-image', gradientCenter);
  boxtop.style.setProperty('background-image', gradientTop);
})
