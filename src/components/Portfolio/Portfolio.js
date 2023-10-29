import Section from "../Section/Section.js";
import Link from "../Link/Link.js";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <Section sectionClass="portfolio__container">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__list">
          <li className="portfolio__item">
          <Link address="https://github.com/DmitryKazancev/how-to-learn"
              sectionClass="portfolio__link"
              _blank>
              <span className="portfolio__link_type_text">Статичный сайт</span>
              <span className="portfolio__link_type_follow">&#8599;</span>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link address="https://dmitrykazancev.github.io/russian-travel/"
              sectionClass="portfolio__link"
              _blank>
              <span className="portfolio__link_type_text">Адаптивный сайт</span>
              <span className="portfolio__link_type_follow">&#8599;</span>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link address="https://dmitrykazancev.github.io/react-mesto-auth/"
              sectionClass="portfolio__link"
              _blank>
              <span className="portfolio__link_type_text">Одностраничное приложение</span>
              <span className="portfolio__link_type_follow">&#8599;</span>
            </Link>
          </li>
        </ul>
      </Section>
    </section>
  );
}