import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate';

export default function Navigation() {

  const [menu, setMenu] = useState(false);

  function handleMenuButton() {
    setMenu(!menu);
  }

  return (
    <div className="navigation">
      <ButtonTemplate sectionClass='navigation__burger-button'
        label='открыть меню'
        handleClick={handleMenuButton}>
      </ButtonTemplate>
      <nav className={`navigation__navbar ${menu ? 'navigation__navbar_active' : ''}`}>
        <ul className="navigation__menu">
          <li className="navigation__item">
            <NavLink to='/'
              className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}
              onClick={handleMenuButton}>
              Главная
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to='/movies'
              className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}
              onClick={handleMenuButton}>
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to='/saved-movies'
              className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}
              onClick={handleMenuButton}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink to='/profile'
          className='navigation__account navigation__link'
          onClick={handleMenuButton}
          aria-label="аккаунт">
        </NavLink>
        <ButtonTemplate sectionClass='navigation__close-button'
          label='закрыть меню'
          handleClick={handleMenuButton}>
        </ButtonTemplate>
      </nav>
    </div>
  )
}
