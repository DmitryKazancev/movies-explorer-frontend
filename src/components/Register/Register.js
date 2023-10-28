import { useEffect } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidations.js';
import InputField from '../InputField/InputField.js';
import SignWithForm from '../SignWithForm/SignWithForm.js';
import { SignContext } from '../../Context/SignContext.js';

export default function Register() {

  const { values, handleChange, errors, isValid, setValues, setErrors, setIsValid, resetForm } = useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    setIsValid(false);
    resetForm();
  }, [setIsValid, resetForm])

  return (
    <SignContext.Provider value={{ values, handleChange, errors, isValid, setValues, setErrors }}>
      <main className='register'>
        <SignWithForm formName="register"
        sectionClass="register__error"
          title="Добро пожаловать!"
          onSubmit={handleSubmit}
          buttonText="Зарегистрироваться">
          <InputField name="name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="30">
            Имя
          </InputField>
          <InputField name="email"
            type="email"
            placeholder="email" >
            E-mail
          </InputField>
          <InputField name="password"
            placeholder="Пароль"
            type="password">
            Пароль
          </InputField>
        </SignWithForm>
      </main>
    </SignContext.Provider>
  )
}