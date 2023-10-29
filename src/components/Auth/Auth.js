import { Link } from 'react-router-dom';

export default function Auth() {

  return (
    <nav className='auth'>
      <ul className='auth__menu'>
        <li> <Link to='/signup' className="auth__link">Регистрация</Link></li>
        <li> <Link to='/signin' className='auth__link auth__login-button'>Войти</Link></li>
      </ul>
    </nav>
  )
}