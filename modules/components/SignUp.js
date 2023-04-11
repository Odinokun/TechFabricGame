import { refs } from '../../helpers/refs.js';

export const SignUp = () => {
  refs.wrap.insertAdjacentHTML('beforeend', `
    <div id="sign-up" class="sign-up">
      <h2 class="sign-up__title">Sign up</h2>
      <form class="sign-up__form">
        <label class="sign-up__label label">
          <input class="sign-up__input input"
                 id="name-input"
                 type="text"
                 name="name">
          <span>Username</span>
          <span>Please enter your username</span>
        </label>
        <label class="sign-up__label label">
          <input class="sign-up__input input"
                 id="email-input"
                 type="email"
                 name="email">
          <span>Email</span>
          <span>Please add valid email address</span>
        </label>
        <button id="sign-up-btn" class="sign-up__btn btn" type="submit">Send</button>
      </form>
    </div>
  `);
  refs.signUp = document.getElementById('sign-up');
  refs.signUpForm = document.getElementById('sign-up__form');
  refs.signUpNameInput = document.getElementById('name-input');
  refs.signUpEmailInput = document.getElementById('email-input');
  refs.signUpBtn = document.getElementById('sign-up-btn');
}