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
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.btn__close');
const btnProfile = Array.from(document.querySelectorAll('.btn__profile'));
const projectTemplate = document.querySelector('#project').content;
const containerProjects = document.querySelector('#projects');
const projectsArr = [
  {
    id: 0,
    type: 'lead-project',
    name: 'Landing Page для CyberGid',
    about: 'Страница рассказывает о приложении-аудиогиде CyberGid. Выполнена адаптивная и кроссбраузерная вёрстка, настроены переходы по ссылкам, слайдер для карточек.',
    img_bg: './images/flowers/pic4.jpg',
    img_project: './images/projects/cybergid.png',
    gif: './images/gif/cybergid_landing.gif',
    link_github_page: 'https://gutmalina.github.io/cybergid-landing/',
    link_github_code: 'https://github.com/gutmalina/cybergid-landing',
  },
  {
    id: 1,
    type: 'lead-project',
    name: 'Pet Project Simple-reports',
    about: 'Проект создан группой junior разработчиков и направлен на сбор и анализ данных для маркетинговых исследований. Находится на стадии разработки.',
    img_bg: './images/flowers/pic9.jpg',
    img_project: './images/projects/simple-reports.png',
    gif: './images/gif/simple_reports.gif',
    link_github_page: 'https://gutmalina.github.io/simple-reports/',
    link_github_code: 'https://github.com/gutmalina/simple-reports',

  },
  {
    id: 2,
    type: 'lead-project',
    name: 'Web site АиБ Цифровизация',
    about: 'Коммерческая разработка frontend части web-сайта для компании АиБ Цифровизация. Выполнена адаптивная и кроссбраузерная вёрстка, настроена валидация и отправка данных на сервер, фильтры и слайдер карточек.',
    img_bg: './images/flowers/pic6.jpg',
    img_project: './images/projects/aib.png',
    gif: './images/gif/aib.gif',
    link_github_page: 'https://gutmalina.github.io/aib/',
    link_github_code: 'https://github.com/gutmalina/aib',
  },
  {
    id: 3,
    type: 'test-project',
    name: 'WhatsApp web',
    about: 'Пользовательский интерфейс для отправки и получений сообщений WhatsApp. Использован прототип сайта https://web.whatsapp.com/ Необходимы учетные данные из системы GREEN-API (idInstance, apiTokenInstance)',
    img_bg: './images/flowers/pic7.jpg',
    img_project: './images/projects/green-api.png',
    gif: './images/gif/whatsapp.gif',
    link_github_page: 'https://gutmalina.github.io/green-api/',
    link_github_code: 'https://github.com/gutmalina/green-api/',
  },
  {
    id: 4,
    type: 'test-project',
    name: 'React Leaflet',
    about: 'Приложение React отображающее точки маршрута в виде маркеров на карте Leaflet. Между точек формируется оптимальный маршрут и отображается в виде полилиний, полученных из сервиса построения треков по дорогам OSRM',
    img_bg: './images/flowers/pic8.jpg',
    img_project: './images/projects/leaflet.png',
    gif: './images/gif/leaflet.gif',
    link_github_page: 'https://gutmalina.github.io/route-display/',
    link_github_code: 'https://github.com/gutmalina/route-display/',
  },
  {
    id: 5,
    type: 'test-project',
    name: 'Landing Page DELL',
    about: 'Страница компании DELL создана в рамках тестового задания. Выполнена адаптивная и кроссбраузерная вёрстка 375px-1920px, создано выпадающее меню при наведение и клике на бургер в мобильной версии, выполнена минимальная валидация данных в форме.',
    img_bg: './images/flowers/pic5.jpg',
    img_project: './images/projects/dell.png',
    gif: './images/gif/dell_landing.gif',
    link_github_page: 'https://gutmalina.github.io/dell-landing/',
    link_github_code: 'https://github.com/gutmalina/dell-landing',
  },
  {
    id: 6,
    type: 'learn-project',
    name: 'Burger designer',
    about: 'Онлайн-конструктор бургеров позволяет создать свой собственный уникальный бургер из списка представленных ингредиентов. Доступны регистрация, сброс пароля, заказ бургера, просмотр прошлых заказов, изменение учетных данных. Необходима авторизация (указать email, без подтверждения)',
    img_bg: './images/flowers/pic1.jpg',
    img_project: './images/projects/react-burger.png',
    gif: './images/gif/burger.gif',
    link_github_page: 'https://gutmalina.github.io/react-burger/',
    link_github_code: 'https://github.com/gutmalina/react-burger',
  },
  {
    id: 7,
    type: 'learn-project',
    name: 'Social network "Mesto"',
    about: 'Социальная сеть для обмена фотографиями. Доступны добавление и удаление фотографий, регистрация, изменение учетных данных, установка/снятие лайка. Необходима авторизация (указать email, без подтверждения)',
    img_bg: './images/flowers/pic2.jpg',
    img_project: './images/projects/mesto.png',
    gif: './images/gif/mesto.gif',
    link_github_page: 'https://gutmalina.github.io/react-mesto-auth/',
    link_github_code: 'https://github.com/gutmalina/react-mesto-auth',
  },
  {
    id: 8,
    type: 'learn-project',
    name: 'Landing Page для Russian-travel',
    about: 'На странице рассказывается о путешествиях по России. Пользователь может посмотреть фотографии, прочитать об интересных фактах, пройдя по ссылкам - получить дополнительную информацию при планировании путешествия.',
    img_bg: './images/flowers/pic3.jpg',
    img_project: './images/projects/russian-travel.png',
    gif: './images/gif/russian-travel.gif',
    link_github_page: 'https://gutmalina.github.io/russian-travel/index.html',
    link_github_code: 'https://github.com/gutmalina/russian-travel',
  }
]
