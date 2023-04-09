import {SignUp} from './modules/components/SignUp.js';
import {StartGame} from './modules/actions/startGame.js';

SignUp();

const signUpBtn = document.getElementById('sign-up-btn');
signUpBtn?.addEventListener('click', StartGame);
