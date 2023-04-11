import { state } from '../../state/state.js';
import { refs } from '../../helpers/refs.js';
import { LevelUp } from './levelUp.js';
import { Finish } from '../components/Finish.js';
import { Audio } from './audio.js';

export const AddDamage = () => {
  ++state.damage;
  refs.damageCounter.innerText = state.damage;

  if (state.damage === 25) {
    refs.wrap.remove();

    Finish();
    Audio();
  } else if (state.damage % 5 === 0) {
    LevelUp();
  }
}