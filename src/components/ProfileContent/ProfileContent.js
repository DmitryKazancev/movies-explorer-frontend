import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoggedInContext } from '../../Context/LoggedInContext.js';
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate';
import useFormAndValidation from '../../hooks/useFormAndValidations.js';

export default function ProfileContent() {

  const navigate = useNavigate();
  const currentUser = 'Виталий';
  const [isEdit, setIsEdit] = useState(false);
  const { values, handleChange, errors } = useFormAndValidation({});
  const { setLoggedIn } = useContext(LoggedInContext);

  function handleEditButton() {
    setIsEdit(true);
  }

  function handleSubmitButton(e) {
    e.preventDefault();
    setIsEdit(false);
  }

  function handleExitButton(e) {
    e.preventDefault();
    setLoggedIn(false);
    navigate('/signin', { replace: true });
  }
  return (
    <section className="profile-content">
      <h1 className="profile-content__title">Привет, {currentUser}!</h1>
      <form className="profile-content__profile">
        <label className="profile-content__label">
          Имя
          <input className="text profile-content__input"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            type="text"
            placeholder="Имя"
            aria-label="Имя"
            minLength="2"
            maxLength="30"
            required />
        </label>
        <span className={`text profile-content__error ${errors.name ? "profile-content__error_active" : ""}`}>{errors.name}</span>
        <label className="profile-content__label">
          E-mail
          <input className="text profile-content__input"
            value={values.email || ''}
            onChange={handleChange}
            id="email-input"
            type="email"
            name="email"
            aria-label="email"
            placeholder="Email"
            autoComplete="on"
            minLength="2"
            maxLength="56"
            required />
        </label>
        <span className={`text profile-content__error ${errors.email ? "profile-content__error_active" : ""}`}>{errors.email}</span>
        {isEdit &&
          <div className="profile-content__group profile-content__group_type_save">
            <span className={`text profile-content__error
            ${errors.email ? "profile-content__error_active" : ""}`}>
              Здесь будут ошибки после отправки запроса
            </span>
            <ButtonTemplate buttonType="submit"
              sectionClass="profile-content__button profile-content__button_type_submit"
              handleClick={handleSubmitButton}>Сохранить</ButtonTemplate>
          </div>
        }
        {!isEdit &&
          <div className="profile-content__group profile-content__group_type_edit">
            <ButtonTemplate buttonType="button"
              sectionClass="profile-content__button profile-content__button_type_edit"
              handleClick={handleEditButton}>Редактировать</ButtonTemplate>
            <ButtonTemplate buttonType="button"
              sectionClass="profile-content__button profile-content__button_type_exit"
              handleClick={handleExitButton}>Выйти из аккаунта</ButtonTemplate>
          </div>
        }
      </form>
    </section>
  )
}