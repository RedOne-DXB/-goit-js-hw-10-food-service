import './sass/main.scss';
import foodServiceMenu from './menu.json';
import foodMenuTemplate from './menu-template.hbs';
import './js/theme-switch';

// console.log(foodMenuTemplate(foodServiceMenu));

const foodServiceMenuList = document.querySelector('.js-menu');
foodServiceMenuList.innerHTML = foodMenuTemplate(foodServiceMenu);
