import {state} from '../../state/state.js';

export const AddDamage = () => {
  const damageCounter = document.getElementById('damage');

  ++state.damage;
  damageCounter.innerText = state.damage;
}