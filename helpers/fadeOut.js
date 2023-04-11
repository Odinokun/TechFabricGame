export const FadeOut = (el) => {
  if (el) {
    el.style.opacity = 1;

    let interval = setInterval(() => {
      if (el.style.opacity > 0) {
        el.style.opacity -= .1;
      } else {
        clearInterval(interval);
        el.remove();
      }
    }, 50);
  }
}