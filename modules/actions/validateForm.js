import {state} from '../../state/state.js';

export const validateForm = (name, email) => {
  if (name.value.length > 0) {
    state.username = name.value;
  } else {
    name.classList.add('error');
    return false;
  }
  if (email.value.length > 0 && email.value.includes('@')) {
    state.email = email.value;
  } else {
    email.classList.add('error');
    return false;
  }
  return true;
};