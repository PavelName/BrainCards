import { createElement } from "../helper/createElement.js"

export const createPairs = (app) => {
    const pairs = createElement('section', {
        className: 'card section-offset',
    });

    const container = createElement('div', {
        className: 'container card__container',
    });
    

};

/* 
<section class="card section-offset">
      <div class="container card__container">
        <button class="card__return" aria-label="Возврат к категориям"></button>
        <button class="card__item">
          <span class="card__front">улыбка</span>
          <span class="card__back">smile</span>
        </button>
      </div>
    </section>

*/