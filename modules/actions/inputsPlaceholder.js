export const InputsPlaceholder = () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('input', function () {
      input.classList.remove('error');
      input.classList.toggle('isActive', input.value.length > 0);
    });
  });
}