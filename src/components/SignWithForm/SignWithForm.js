import Logo from '../Logo/Logo.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SignContext } from '../../Context/SignContext.js';
import { LoggedInContext } from '../../Context/LoggedInContext.js';

export default function SignWithForm({ formName, title, children, buttonText, sectionClass }) {

  const navigate = useNavigate();
  const location = useLocation();
  const { isValid } = useContext(SignContext);
  const { setLoggedIn } = useContext(LoggedInContext);

  function handleSubmit(e) {
    console.log('submit');
    e.preventDefault();
    setLoggedIn(true);
    navigate('/movies', { replace: true });
  }

  return (
    <section className="sign-with-form">
      <Logo sectionClass="sign-with-form__logo" />
      <h1 className="sign-with-form__title">{title}</h1>
      <form className="form sign-with-form__form"
        name={formName}
        onSubmit={handleSubmit}>
        {children}
        <span className={`sign-with-form__error ${sectionClass} 
        ${false ? "sign-with-form__error_active" : ""}`}>
          Текст ошибки
        </span>
        <button type="submit"
          className={`button button_focus sign-with-form__submit 
          ${isValid ? '' : 'sign-with-form__submit_inactive'}`}
          disabled={!isValid}>
          {buttonText}
        </button>
      </form>
      {location.pathname === '/signin' && <span className="sign-with-form__question">
        Ещё не зарегистрированы?
        <Link to="/signup" className="sign-with-form__link">Регистрация</Link>
      </span>}
      {location.pathname === '/signup' && <span className="sign-with-form__question">
        Уже зарегистрированы?
        <Link to="/signin" className="sign-with-form__link">Войти</Link>
      </span>}
    </section>
  )
}