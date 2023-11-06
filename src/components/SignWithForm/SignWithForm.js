import Logo from '../Logo/Logo.js';
import { Link, useLocation} from 'react-router-dom';
import { useContext } from 'react';
import { SignContext } from '../../Context/SignContext.js';

export default function SignWithForm({ isLoading, errorMessage, formName, title, children, buttonText, buttonTextAction, sectionClass, onSubmit }) {

  const location = useLocation();
  const { isValid } = useContext(SignContext);
 
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
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
        ${errorMessage ? "sign-with-form__error_active" : ""}`}>
          {errorMessage}
        </span>
        <button type="submit"
          className={`button button_focus sign-with-form__submit 
          ${isValid ? '' : 'sign-with-form__submit_inactive'}`}
          disabled={!isValid}>
          {isLoading ? buttonTextAction : buttonText}
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