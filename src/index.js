import './sass/main.scss';
import foodServiceMenu from './menu.json';
import foodMenuTemplate from './menu-template.hbs';

console.log(foodMenuTemplate(foodServiceMenu));

const foodServiceMenuList = document.querySelector('.js-menu');
foodServiceMenuList.innerHTML = foodMenuTemplate(foodServiceMenu);
