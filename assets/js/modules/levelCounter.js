import {ChangeLevelDecor} from './changeLevelDecor.js';

const levelCount = document.getElementById('level-count');

export const ChangeLevel = () => {
  if (damage % 5 === 0 && levelCount) {
    ++level
    levelCount.innerHTML = level;
    ChangeLevelDecor();
  }
};

