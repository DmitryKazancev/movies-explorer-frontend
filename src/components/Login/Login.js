import { useEffect, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidations.js';
import InputField from '../InputField/InputField.js';
import SignWithForm from '../SignWithForm/SignWithForm.js';
import { SignContext } from '../../Context/SignContext.js';
import { AppContext } from '../../Context/AppContext.js';
import Auth from '../../utils/Auth.js';
import { regexpEmail, resultMessage } from '../../utils/constants.js';

export default function Login() {

  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoading, isLoading, isLoggedIn, setLoggedIn } = useContext(AppContext);
  const { values, handleChange, errors, isValid, setValues, setErrors, setIsValid, resetForm } = useFormAndValidation({});
  const { login } = Auth({});
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmitLogin(e) {
    setIsLoading(true);
    login(values.email, values.password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.error(err);
        if (err.status === 403) {
          return setErrorMessage(resultMessage.failToken);
        }
        if (err.status === 401) {
          return setErrorMessage(resultMessage.wrongEmailPass);
        }
        setErrorMessage(resultMessage.failLogin);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }

  useEffect(() => {
    if(isLoggedIn && location.pathname === '/signin'){
      navigate('/', { replace: true });
    }
    setIsValid(false);
    resetForm();
    setErrorMessage('');
  }, [setIsValid, resetForm, setErrorMessage, location, isLoggedIn, navigate])

  return (
    <SignContext.Provider value={{ values, handleChange, errors, isValid, setValues, setErrors }}>
      <main className='login'>
        <SignWithForm formName="login"
          sectionClass="login__error"
          title="Рады видеть!"
          onSubmit={handleSubmitLogin}
          buttonTextAction='Авторизация...'
          buttonText="Войти"
          errorMessage={errorMessage}
          isLoading={isLoading}>
          <InputField name="email"
            type="email"
            pattern={regexpEmail.source}
            placeholder="" >
            E-mail
          </InputField>
          <InputField name="password"
            placeholder=""
            type="password">
            Пароль
          </InputField>
        </SignWithForm>
      </main>
    </SignContext.Provider>
  )
}