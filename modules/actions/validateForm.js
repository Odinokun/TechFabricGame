import { state } from '../../state/state.js';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ValidateForm = (name, email) => {
  if (!name || name.value.trim() === '') {
    name.classList.add('error');
    return false
  }

  if (!email || !emailRegex.test(email.value)) {
    email.classList.add('error');
    return false;
  }

  state.username = name.value;
  state.email = email.value;

  return true;

};