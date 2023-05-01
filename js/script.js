import {createCategories} from './components/createCategory.js';
import { createEditCategory } from './components/createEditCategoru.js';
import { createHeader } from './components/createHeader.js';
import { createElement } from './helper/createElement.js';
import { fetchCards, fetchCatigories } from './service/api.service.js';

const initApp = async () => {

    const headerParent = document.querySelector('.header');
    const app = document.querySelector('#app');

    const headerObj = createHeader(headerParent);
    const categoryObj = createCategories(app);
    const editCategoryObj = createEditCategory(app);

    const allSectionUnmount = () => {
        [categoryObj, editCategoryObj].forEach(obj => obj.unmount());
    };


    const renderIndex = async e => {
        e?.preventDefault();
        allSectionUnmount();
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
        allSectionUnmount();
        headerObj.updateHeaderTitle('Новая категория');
        editCategoryObj.mount();
    });

    categoryObj.categoryList.addEventListener('click', async ({ target }) => {
        const categoryItem = target.closest('.category__item')
        
        if ( target.closest('.category__edit')) {

            const dataCards = await fetchCards(categoryItem.dataset.id);
            allSectionUnmount();
            headerObj.updateHeaderTitle('Редактирование');
            editCategoryObj.mount(dataCards);
            return;
        }
    });

    
    
};

initApp();

const isInternationalPhone =(form) => {
    const firstSimb = form[0] === '+';
    return firstSimb ;
  }
console.log(isInternationalPhone('+89602223423'));
console.log(isInternationalPhone('89602223423'));

