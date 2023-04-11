import { refs } from '../../helpers/refs.js';

export const NextLevel = (num) => {
  refs.wrap.insertAdjacentHTML('beforeend', `
    <div id="next-lvl" class="next-lvl">
      <h2 class="next-lvl__title">Level ${num}</h2>
      <h2 class="next-lvl__anim-title">completed</h2>
    </div>
  `);
  refs.nextLvl = document.getElementById('next-lvl');
  refs.nextLvlTitle = document.getElementById('next-lvl__title');
}