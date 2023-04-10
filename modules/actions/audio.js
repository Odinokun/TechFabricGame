export const Audio = () => {
  const btn = document.getElementById('audio-btn');
  const audio = document.getElementById('audio');

  btn.addEventListener('click', () => {
    audio.paused ? audio.play() : audio.pause();
    btn.classList.toggle('isActive', !audio.paused);
  })
}