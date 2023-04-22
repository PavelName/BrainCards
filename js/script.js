import {createCategories} from './components/createCategory.js';
import { createHeader } from './components/createHeader.js';
import { createElement } from './helper/createElement.js';
import { fetchCatigories } from './service/api.service.js';

const initApp = async () => {

    const headerParent = document.querySelector('.header');
    const app = document.querySelector('#app');

    const headerObj = createHeader(headerParent);
    const categoryObj = createCategories(app);
    


    const renderIndex = async e => {
        e?.preventDefault();
        const categories = await fetchCatigories();

    if (categories.error) {
        app.append(createElement('p', {
            className: 'server-error',
            textContent: 'Ошибка сервера!'
        }));
        app.append(errorText);
        return;
    };
    categoryObj.mount(categories);
    };
    renderIndex();

    headerObj.headerLogoLink.addEventListener('click', renderIndex);

    headerObj.headerBtn.addEventListener('click', () => {
        categoryObj.unmount();
        headerObj.updateHeaderTitle('Новая категория');
    });

    
};

initApp();