export const Footer = (damage) => {
  const main = document.getElementById('main');

  main.insertAdjacentHTML('afterend', `
    <div id="footer" class="footer">
      <div id="damage" class="damage">${damage}</div>
      <div class="weapon">
        <button id="damage-btn" class="weapon__btn">fire</button>
      </div>
    </div>
  `);
}

