import { refs } from '../../helpers/refs.js';

export const SpaceShip = (img) => {
  refs.main.insertAdjacentHTML('afterbegin', `
    <div class="ship">
      <img id="ship-img" src=${img} alt="alien spaceship">
    </div>
  `);
  refs.starshipImg = document.getElementById('ship-img');
}