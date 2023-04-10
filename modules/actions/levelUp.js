import {state} from '../../state/state.js';
import {FadeOut} from '../../helpers/fadeOut.js';
import {NextLevel} from '../components/NextLevel.js';

export const LevelUp = () => {
  const levelCounter = document.getElementById('level-count');
  const wrap = document.getElementById('wrap');
  const image = document.getElementById('ship-img');

  //begin Next level popup
  NextLevel(state.level);
  const nextLvl = document.getElementById('next-lvl');
  nextLvl && setTimeout(()=>{
     FadeOut(nextLvl)
   }, 1300)
  //end Next level popup

  ++state.level;
  levelCounter.innerText = state.level;

  const currentLevel = state.levels.filter(obj => obj.levelVal === state.level)
  wrap.style.backgroundImage = currentLevel[0].bgUrl;
  image.src = currentLevel[0].shipImgUrl;
}