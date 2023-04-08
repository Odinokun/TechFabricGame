const damageCounter = document.getElementById('damage');

export const AddDamage = () => {
  if (damageCounter) {
    ++damage;
    damageCounter.innerHTML = damage;
  }
};