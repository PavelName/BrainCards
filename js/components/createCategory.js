import { createElement } from "../helper/createElement.js";
import { declOfNum } from "../helper/declOfNum.js";

export const createCategories = (app) => {

    const category = createElement('section', {
        className: 'category section-offset',
    });

    const container = createElement('div', {
        className: 'container',
    });

    category.append(container);

    const categoryList = createElement('ul', {
        className: 'category__list',
    });

    const createCategoryCard = (data) => {
        const item = createElement('li', {
            className: 'category__item',
            
        });
        item.dataset.id = data.id;

        const btnCard = createElement('button', {
            className: 'category__card',
        });

        const titleText = createElement('span', {
            className: 'category__title',
            textContent: data.title,
        });

        const pairsText = createElement('span', {
            className: 'category__pairs',
            textContent: declOfNum(data.length, ['пара', 'пары', 'пар']),
        });

        btnCard.append(titleText, pairsText);

        const btnEdit = createElement('button', {
            className: 'category__btn category__edit',
            ariaLable: 'редактировать',
        });

        const btnDel = createElement('button', {
            className: 'category__btn category__del',
            ariaLable: 'удалить',
        });

       item.append(btnCard, btnDel, btnEdit);

        return item;
    }

    container.append(categoryList);

    const mount = (data) => {
        categoryList.textContent = '';
        const cards = data.map(createCategoryCard);
        categoryList.append(...cards);
        app.append(category);
    };
    
    const unmount = () => {
        category.remove();

    };
    return {mount, unmount, categoryList};

};

