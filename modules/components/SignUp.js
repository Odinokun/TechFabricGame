export const SignUp = () => {
  const wrap = document.getElementById('wrap');

  wrap.insertAdjacentHTML('beforeend',`
  <div id="sign-up" class="sign-up">
    <h2 class="sign-up__title">Sign up</h2>
    <form class="sign-up__form">
      <label class="sign-up__label label">
        <input class="sign-up__input input"
               id="name-input"
               type="text"
               name="name"
               required>
        <span>Nickname</span>
      </label>
      <label class="sign-up__label label">
        <input class="sign-up__input input"
               id="email-input"
               type="email"
               name="email"
               required>
        <span>Email</span>
      </label>
      <button id="sign-up-btn" class="sign-up__btn btn" type="submit">Send</button>
    </form>
  </div>
`);
}