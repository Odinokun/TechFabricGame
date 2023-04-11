export const InputsPlaceholder = () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      input.classList.toggle('isActive', input.value.length > 0);
    });
  });
}