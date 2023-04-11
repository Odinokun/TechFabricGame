import { refs } from '../../helpers/refs.js';

export const Audio = () => {
  refs.audioBtn.addEventListener('click', () => {
    refs.audio.paused ? refs.audio.play() : refs.audio.pause();
    refs.audioBtn.classList.toggle('isActive', !refs.audio.paused);
  })
}