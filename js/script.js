import {createCategories} from './components/createCategory.js';
import { createEditCategory } from './components/createEditCategoru.js';
import { createHeader } from './components/createHeader.js';
import {createPairs} from './components/createPairs.js';
import { showAlert } from './components/showAlert.js';
import { createElement } from './helper/createElement.js';
import { fetchCards, fetchCatigories } from './service/api.service.js';

const initApp = async () => {

    const headerParent = document.querySelector('.header');
    const app = document.querySelector('#app');

    const headerObj = createHeader(headerParent);
    const categoryObj = createCategories(app);
    const editCategoryObj = createEditCategory(app);
    const pairsObj = createPairs(app);

    const allSectionUnmount = () => {
        [categoryObj, editCategoryObj, pairsObj].forEach(obj => obj.unmount());
    };

    const postHandler = () => {
        const data = editCategoryObj.parseData();
        const dataCategory = fetchCreateCategory(data);

        if (dataCategory.error) {
            showAlert(dataCategory.error.messege);
            return
        }

        showAlert(`Новая категория${data.title}была добавлена`);
        allSectionUnmount();
        headerObj.updateHeaderTitle('Категории');
        categoryObj.mount(dataCategory);
    };

    const patchHandler = () => {
        const data = editCategoryObj.parseData();
        const dataCategory = fetchEditCategory(id, data);

        if (dataCategory.error) {
            showAlert(dataCategory.error.messege);
            return
        }

        showAlert(`Категория${data.title}обновлена`);
        allSectionUnmount();
        headerObj.updateHeaderTitle('Категории');
        categoryObj.mount(dataCategory);
    };


    const renderIndex = async e => {
        e?.preventDefault();
        allSectionUnmount();
        const categories = await fetchCatigories();
        headerObj.updateHeaderTitle('Категории');

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
        editCategoryObj.btnSave.addEventListener('click', postHandler);
        editCategoryObj.btnSave.removeEventListener('click', patchHandler);
    });

    categoryObj.categoryList.addEventListener('click', async ({ target }) => {
        const categoryItem = target.closest('.category__item')
        
        if ( target.closest('.category__edit')) {

            const dataCards = await fetchCards(categoryItem.dataset.id);
            allSectionUnmount();
            headerObj.updateHeaderTitle('Редактирование');
            editCategoryObj.mount(dataCards);
            editCategoryObj.btnSave.addEventListener('click', patchHandler);
            editCategoryObj.btnSave.removeEventListener('click', postHandler);
            return;
        }
        
        if (target.closest('.category__del')) {
            console.log('Delite');
            return;
        }

        if (categoryItem) {
           const dataCards = await fetchCards(categoryItem.dataset.id);
           allSectionUnmount();
           headerObj.updateHeaderTitle(dataCards.title);
           pairsObj.mount(dataCards);
        }
    });
    
    pairsObj.buttonReturn.addEventListener('click', renderIndex);
   
};

initApp();

// ending 



