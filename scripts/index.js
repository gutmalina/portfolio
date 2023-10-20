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

const openPopup = (project) => {
  popup.querySelector('.popup__gif').src = project.gif
  popup.querySelector('.title__popup').innerHTML = project.name
  popup.querySelector('.subtitle__popup').innerHTML = project.about
  popup.querySelector('.link__icon_www').href = project.link_github_page
  popup.querySelector('.link__icon_github').href = project.link_github_code
  popup.addEventListener('mousedown', closePopup)
  btnClose.addEventListener('mousedown', closePopup);
  popup.classList.add('popup__opened')
}

const closePopup = () => {
  popup.removeEventListener('mousedown', closePopup)
  btnClose.removeEventListener('mousedown', closePopup)
  popup.classList.remove('popup__opened')
}

/** закрыть попап по Escape */
const closeEscPopup = (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
};

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


menuBtn.addEventListener('click', openHeaderMenu);
menuBtnClose.addEventListener('click', closeHeaderMenu);
document.addEventListener("keydown", (e) => closeEscPopup(e));
/** показать все проекты */
btnProfile.map(item=>
  item.addEventListener('mousedown', (e)=> {
  const container = document.querySelector(`#${e.target.name}`)
  const projects = Array.from(container.querySelectorAll('.project'))
  projects.map(item=> item.style.display = 'flex')
}))
