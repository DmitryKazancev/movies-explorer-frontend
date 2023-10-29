import Section from '../Section/Section.js';
import Link from '../Link/Link.js';

export default function NavTab() {
  
  return (
    <section className='navtab'>
      <Section sectionClass="navtab__container">
        <nav>
          <ul className="navtab__list">
            <li className="navtab__item">
              <Link address="#about-project"
                sectionClass="navtab__link">
                О проекте
              </Link>
            </li>
            <li className="navtab__item">
              <Link address="#techs"
                sectionClass="navtab__link">
                Технологии
              </Link>
            </li>
            <li className="navtab__item">
              <Link address="#about-me"
                sectionClass="navtab__link">
                Студент
              </Link>
            </li>
          </ul>
        </nav>
      </Section>
    </section>
  );
}