import { createElement } from "../helper/createElement.js";

const TITLE = 'введите название категории';

export const createEditCategory = (app) => {

        const editCategory = createElement('section', {
            className: 'edit section-offset',
        });

        const container = createElement('div', {
            className: 'container edit__container',
        });

        const title = createElement('h2', {
            className: 'edit__title',
            contenteditable: 'true',
            title:'Можно редактировать',
        });

        const table = createElement('table', {
            className:'edit__table table',
        });

        const thead = createElement('thead');
        const trThead = createElement('tr');

        const tableHeadCellMain = createElement('th', {
            className: 'table__cell',
            textContent: 'main',
        });

        const tableHeadCellSecond = createElement('th', {
            className: 'table__cell',
            textContent: 'second',
        });

        const tableHeadCellEmpty = createElement('th', {
            className: 'table__cell',
            
        });




    /**
     * 
        
          <thead>
            <tr>
              <th class="table__cell">main</th>
              <th class="table__cell">second</th>
              <th class="table__cell"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table__cell table__cell_one" contenteditable="true">брат</td>
              <td class="table__cell table__cell_two" contenteditable="true">brother</td>
              <td class="table__cell"><button class="table__del">x</button></td>
            </tr>
          </tbody>
        </table>
        <div class="edit__btn-wrapper">
          <button class="edit__btn edit__add-row">Добавить пару</button>
          <button class="edit__btn edit__save" data-id="bczp358gktzy">Сохранить категорию</button>
          <button class="edit__btn edit__cancel">Отмена</button>
        </div>
      </div>
    </section>
     */

    const mount = () => {

    };

     const unmount = () => {

     };
    return { mount, unmount }
};