export const NextLevel = (num) => {
  const wrap = document.getElementById('wrap');

  wrap.insertAdjacentHTML('beforeend', `
    <div id="next-lvl" class="next-lvl">
      <h2 class="next-lvl__title">Level ${num}</h2>
      <h2 class="next-lvl__anim-title">completed</h2>
    </div>
  `);
}