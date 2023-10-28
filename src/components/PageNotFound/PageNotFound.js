import { useNavigate } from 'react-router-dom';
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate';

export default function PageNotFound() {

  const path = useNavigate();

  function goBack() {
    path(-1);
  }
  return (
    <main className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <ButtonTemplate buttonType="button"
        sectionClass="page-not-found__link"
        handleClick={goBack}>Назад</ButtonTemplate>
    </main>
  );
}