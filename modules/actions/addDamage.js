import {state} from '../../state/state.js';

import {LevelUp} from './levelUp.js';

export const AddDamage = () => {
  const damageCounter = document.getElementById('damage');

  ++state.damage;
  damageCounter.innerText = state.damage;

  if (state.damage % 5 === 0) {
    LevelUp();
  }
}