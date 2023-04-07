let damage = 0;
const damageCounter = document.getElementById('damage');
const damageBtn = document.getElementById('damage-btn');

const AddDamage = (num) => {
  damage = ++num;
  if (damageCounter) {
    damageCounter.innerHTML = damage;
  }
};

damageBtn && damageBtn.addEventListener('click', () => AddDamage(damage));