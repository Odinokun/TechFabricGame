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