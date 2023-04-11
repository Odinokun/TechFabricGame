import { state } from '../../state/state.js';
import { refs } from '../../helpers/refs.js';
import { FadeOut } from '../../helpers/fadeOut.js';
import { NextLevel } from '../components/NextLevel.js';

export const LevelUp = () => {
  //begin Next level popup
  NextLevel(state.level);
  const newLevelSetTimeout = setTimeout(() => {
    FadeOut(refs.nextLvl)
    clearTimeout(newLevelSetTimeout);
  }, 1500);
  //end Next level popup

  ++state.level;
  refs.levelCounter.innerText = state.level;

  const currentLevel = state.levels.filter(({levelVal}) => levelVal === state.level)
  refs.wrap.style.backgroundImage = currentLevel[0].bgUrl;
  refs.starshipImg.src = currentLevel[0].shipImgUrl;
}