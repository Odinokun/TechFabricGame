export const ChangeLevelDecor = () => {
  const wrap = document.getElementById('wrap');
  const image = document.getElementById('ship-img');

  if (wrap && image) {
    switch (level) {
      case 1:
        wrap.style.backgroundImage = "url('assets/img/bg-lvl/bg-lvl-01.jpg')";
        image.src = 'assets/img/ships/ship-01.png';
        break;
      case 2:
        wrap.style.backgroundImage = "url('assets/img/bg-lvl/bg-lvl-02.jpg')";
        image.src = 'assets/img/ships/ship-02.png';
        break;
      case 3:
        wrap.style.backgroundImage = "url('assets/img/bg-lvl/bg-lvl-03.jpg')";
        image.src = 'assets/img/ships/ship-03.png';
        break;
      case 4:
        wrap.style.backgroundImage = "url('assets/img/bg-lvl/bg-lvl-04.jpg')";
        image.src = 'assets/img/ships/ship-04.png';
        break;
      case 5:
        wrap.style.backgroundImage = "url('assets/img/bg-lvl/bg-lvl-05.jpg')";
        image.src = 'assets/img/ships/ship-05.png';
        break;
      default:
        wrap.style.backgroundImage = "url('assets/img/bg-lvl/bg-lvl-01.jpg')";
        image.src = 'assets/img/ships/ship-01.png';
        break;
    }
  }
};
