
import { createElement } from '../helper/createElement.js';

export const createHeader = (parent) => {
    
    const container = createElement('div', {
        className: 'container header__container',
    });

    parent.append(container);

    const headerLogoLink = createElement('a',{
        href: '#',
        className: 'header__logo-link',
    });

    const logo = createElement('img', {
        src: 'img/logo.svg',
        className: 'header__logo',
        alt:'Логотип сервиса Brain Cards',

    });
    

    headerLogoLink.append(logo);

    const headerTitle = createElement('h2', {
        className:'header__subtitle',
        textContent: 'Категории',
    });

    const headerBtn = createElement('button', {
        className: 'header__btn',
        textContent: 'Добавить категорию',

    });

    container.append(headerLogoLink, headerTitle, headerBtn);

    const updateHeaderTitle = (title) => {
        headerTitle.textContent = title;
    };

    return {headerLogoLink, headerBtn, updateHeaderTitle};
};

/* 
<div class="container header__container">
<a class="header__logo-link" href="#">
  <img class="header__logo" src="img/logo.svg" alt="Логотип сервиса Brain Cards">
</a>
<h2 class="header__subtitle">Категории</h2>
<button class="header__btn">Добавить категорию</button>
</div>
</header>
*/