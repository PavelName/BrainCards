import { createHeader } from './components/createHeader.js';
import { fetchCatigories } from './service/api.service.js';

const initApp = async () => {

    const headerParent = document.querySelector('.header');
    const app = document.querySelector('#app');

    const headerObj = createHeader(headerParent);
    
    const categories = await fetchCatigories();
    console.log('categories:', categories);

    const returnIndex = e => {
        e.preventDefault();
        headerObj.updateHeaderTitle('Категории');
    };

    headerObj.headerLogoLink.addEventListener('click', returnIndex);

    headerObj.headerBtn.addEventListener('click', () => {
        headerObj.updateHeaderTitle('Новая категория');
    });

    
};

initApp();