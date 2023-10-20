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
const btnProfile = Array.from(document.querySelectorAll('.btn__profile'));
const projectTemplate = document.querySelector('#project').content;
const containerLeadProjects = document.querySelector('#lead-project');
const containerTestProjects = document.querySelector('#test-project');
const containerLearnProjects = document.querySelector('#learn-project');
const projectsArr = [
  {
    id: 0,
    type: 'lead-project',
    name: 'Landing CyberGig',
    about: 'Landing Page для CyberGid - приложение даёт вам возможность во время прогулок по городу слушать интересные факты и рассказы о данном месте',
    img_bg: './images/flowers/pic4.jpg',
    img_project: './images/projects/cybergid.png',
    link_github_page: 'https://gutmalina.github.io/cybergid-landing/',
    link_github_code: 'https://github.com/gutmalina/cybergid-landing',
  },
  {
    id: 1,
    type: 'lead-project',
    name: 'Maxboom',
    about: 'Frontend часть сайта магазина электронной техники Maxboom',
    img_bg: './images/flowers/pic5.jpg',
    img_project: './images/projects/maxboom.png',
    link_github_page: 'https://gutmalina.github.io/maxboom/',
    link_github_code: 'https://github.com/gutmalina/maxboom',
  },
  {
    id: 2,
    type: 'lead-project',
    name: 'АиБ Цифровизация',
    about: 'Frontend часть сайта для компании АиБ Цифровизация',
    img_bg: './images/flowers/pic6.jpg',
    img_project: './images/projects/aib.png',
    link_github_page: 'https://gutmalina.github.io/aib/',
    link_github_code: 'https://github.com/gutmalina/aib',
  },
  {
    id: 3,
    type: 'test-project',
    name: 'WhatsApp-Api',
    about: '',
    img_bg: './images/flowers/pic7.jpg',
    img_project: './images/projects/green-api.png',
    link_github_page: 'https://gutmalina.github.io/green-api/',
    link_github_code: 'https://github.com/gutmalina/green-api/',
  },
  {
    id: 4,
    type: 'test-project',
    name: 'map Leaflet',
    about: '',
    img_bg: './images/flowers/pic8.jpg',
    img_project: './images/projects/leaflet.png',
    link_github_page: 'https://gutmalina.github.io/route-display/',
    link_github_code: 'https://github.com/gutmalina/route-display/',
  },
  {
    id: 5,
    type: 'lead-project',
    name: 'Simple-reports',
    about: '',
    img_bg: './images/flowers/pic9.jpg',
    img_project: './images/projects/simple-reports.png',
    link_github_page: 'https://gutmalina.github.io/simple-reports/',
    link_github_code: 'https://github.com/gutmalina/simple-reports',
  },
  {
    id: 6,
    type: 'learn-project',
    name: 'React-burger',
    about: '',
    img_bg: './images/flowers/pic1.jpg',
    img_project: './images/projects/react-burger.png',
    link_github_page: 'https://gutmalina.github.io/react-burger/',
    link_github_code: 'https://github.com/gutmalina/react-burger',
  },
  {
    id: 7,
    type: 'learn-project',
    name: 'Mesto',
    about: '',
    img_bg: './images/flowers/pic2.jpg',
    img_project: './images/projects/mesto.png',
    link_github_page: 'https://gutmalina.github.io/react-mesto-auth/',
    link_github_code: 'https://github.com/gutmalina/react-mesto-auth',
  },
  {
    id: 8,
    type: 'learn-project',
    name: 'Russian-travel',
    about: '',
    img_bg: './images/flowers/pic3.jpg',
    img_project: './images/projects/russian-travel.png',
    link_github_page: 'https://gutmalina.github.io/russian-travel/index.html',
    link_github_code: 'https://github.com/gutmalina/russian-travel',
  }
]
