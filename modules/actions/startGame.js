import { state } from '../../state/state.js';
import { refs } from '../../helpers/refs.js';
import { ValidateForm } from './validateForm.js';
import { Header } from '../components/Header.js';
import { SpaceShip } from '../components/SpaceShip.js';
import { Footer } from '../components/Footer.js';
import { AddDamage } from './addDamage.js';

export const StartGame = () => {
  // begin form validate
  if (!ValidateForm(refs.signUpNameInput, refs.signUpEmailInput)) {
    return;
  }
  refs.signUp.remove();
  // end form validate

  const levelStateArr = state.levels.filter(({ levelVal }) => levelVal === state.level);
  const levelState = levelStateArr[0];

  refs.wrap.style.backgroundImage = levelState.bgUrl;

  const mainElem = document.createElement("main");
  mainElem.setAttribute("id", "main");
  mainElem.setAttribute("class", "main");
  refs.wrap.appendChild(mainElem);
  refs.main = mainElem;

  Header(state.username);
  SpaceShip(levelState.shipImgUrl);
  Footer(state.damage);

  refs.damageBtn?.addEventListener('click', AddDamage);
  refs.starshipImg?.addEventListener('click', AddDamage);
}