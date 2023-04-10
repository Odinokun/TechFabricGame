export const SpaceShip = (img) => {
  const main = document.getElementById('main');

  main.insertAdjacentHTML('afterbegin', `
    <div class="ship">
      <img id="ship-img" src=${img} alt="alien spaceship">
    </div>
  `);
}