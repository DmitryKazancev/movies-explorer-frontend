import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext.js';
import Navigation from '../Navigation/Navigation.js';
import Auth from '../Auth/Auth.js';
import Logo from '../Logo/Logo.js';

export default function Header({ sectionClass }) {

  const { isLoggedIn } = useContext(AppContext);

  return (
    <header className={`header ${sectionClass}`}>
      <div className="header__container">
        <Logo sectionClass="header__logo" />
        {!isLoggedIn && <Auth />}
        {isLoggedIn && <Navigation />}
      </div>
    </header>
  );
}