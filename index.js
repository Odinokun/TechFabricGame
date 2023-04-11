import { refs } from './helpers/refs.js';
import { OnScreenHeight } from './modules/actions/onScreenHeight.js';
import { SignUp } from './modules/components/SignUp.js';
import { InputsPlaceholder } from './modules/actions/inputsPlaceholder.js';
import { StartGame } from './modules/actions/startGame.js';

OnScreenHeight();
SignUp();
InputsPlaceholder();

refs.signUpBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  StartGame();
});