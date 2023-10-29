import Section from '../Section/Section.js';
import Link from '../Link/Link.js';

export default function Footer() {
  return (
    <footer className="footer">
      <Section sectionClass="footer__container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__block">
          <span className="footer__year">©2023</span>
          <ul className="footer__list">
            <li>
              <Link address="https://practicum.yandex.ru/"
                sectionClass="footer__link"
                _blank>
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link address="https://github.com/"
                sectionClass="footer__link"
                _blank>
                Github
              </Link>
            </li>
          </ul>
        </div>
      </Section>
    </footer>
  );
}