import {SignUp} from './modules/components/SignUp.js';
import {InputsPlaceholder} from './modules/actions/inputsPlaceholder.js';
import {StartGame} from './modules/actions/startGame.js';

SignUp();
InputsPlaceholder();

const signUpBtn = document.getElementById('sign-up-btn');
signUpBtn?.addEventListener('click', StartGame);