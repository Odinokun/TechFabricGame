import {state} from '../../state/state.js';

import {validateForm} from './validateForm.js';
import {Header} from '../components/Header.js';
import {SpaceShip} from '../components/SpaceShip.js';
import {Footer} from '../components/Footer.js';
import {AddDamage} from './addDamage.js';

export const StartGame = () => {
  // begin form validate
  const signUp = document.getElementById('sign-up');
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');

  if (!validateForm(nameInput, emailInput)) {
    return;
  }
  signUp.remove();
  // end form validate


  const wrap = document.getElementById('wrap');
  const levelStateArr = state.levels.filter(obj => obj.levelVal === state.level);
  const levelState = levelStateArr[0];

  wrap.style.backgroundImage = levelState.bgUrl;

  const mainElem = document.createElement("main");
  mainElem.setAttribute("id", "main");
  mainElem.setAttribute("class", "main");
  wrap.appendChild(mainElem);

  Header(state.username);
  SpaceShip(levelState.shipImgUrl);
  Footer(state.damage);

  const damageBtn = document.getElementById('damage-btn');
  damageBtn?.addEventListener('click', AddDamage);
}