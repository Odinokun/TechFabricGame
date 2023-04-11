import { refs } from '../../helpers/refs.js';

export const Header = (name) => {
  refs.main.insertAdjacentHTML('beforebegin', `
    <header id="header" class="header">
      <div class="header__item level">
        <span>Level: </span>
        <span id="level-count">1</span>
      </div>
  
      <div class="header__item user">
        <span class="user__name">${name}</span>
        <div class="user__ava">
          <img src="assets/img/ava.jpg" alt="user avatar">
        </div>
      </div>
    </header>
  `);
  refs.levelCounter = document.getElementById('level-count');
}

