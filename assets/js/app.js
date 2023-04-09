window.level = 1;
window.damage = 0;

import {AddDamage} from './modules/damageCounter.js';
import {ChangeLevel} from './modules/levelCounter.js';

const damageBtn = document.getElementById('damage-btn');

const BtnHandler = () => {
  AddDamage();
  ChangeLevel();
}

damageBtn?.addEventListener('click', BtnHandler);


const inputsList = document.querySelectorAll('input');
inputsList.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value !== '') {
      input.classList.add('isActive');
    } else {
      input.classList.remove('isActive');
    }
  });
});