import { refs } from '../../helpers/refs.js';

export const Footer = (damage) => {
  refs.main.insertAdjacentHTML('afterend', `
    <div id="footer" class="footer">
      <div id="damage" class="damage">${damage}</div>
      <div class="weapon">
        <button id="damage-btn" class="weapon__btn">fire</button>
      </div>
    </div>
  `);
  refs.damageCounter = document.getElementById('damage');
  refs.damageBtn = document.getElementById('damage-btn');
}