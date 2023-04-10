import {state} from '../../state/state.js';

import {LevelUp} from './levelUp.js';
import {Finish} from '../components/Finish.js';
import {Audio} from './audio.js';

export const AddDamage = () => {
  const damageCounter = document.getElementById('damage');

  ++state.damage;
  damageCounter.innerText = state.damage;

  if (state.damage === 25) {
    const wrap = document.getElementById('wrap');
    wrap.remove();

    Finish();
    Audio();
  } else if (state.damage % 5 === 0) {
    LevelUp();
  }
}