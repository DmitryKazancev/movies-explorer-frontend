import Header from '../Header/Header.js';
import ProfileContent from '../ProfileContent/ProfileContent.js';
import { useState, useContext } from 'react';
import { AppContext } from '../../Context/AppContext.js';
import api from '../../utils/MainApi.js';

export default function Profile() {
  
  const { setCurrentUser, isLoading, setIsLoading } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleProfileSubmit(userData) {
    setIsSuccess(false);
    setIsLoading(true);
    api.setUserInfo(userData)
      .then((userData) => {
        setCurrentUser(userData)
        setErrorMessage('');
        setIsSuccess(true);
        setIsEdit(false);
      })
      .catch((err) => {
        console.error(err);
        setIsSuccess(false);
        if (err.status === 409) {
          return setErrorMessage('Пользователь с таким email существует.');
        }
        setErrorMessage('При обновлении профиля произошла ошибка.');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <div className="profile">
      <Header sectionClass="profile__header" />
      <main>
        <ProfileContent handleProfileSubmit={handleProfileSubmit}
          errorMessage={errorMessage}
          isSuccess={isSuccess}
          isLoading={isLoading}
          isEdit={isEdit} 
          setIsEdit={setIsEdit}/>
      </main>
    </div>
  )
}