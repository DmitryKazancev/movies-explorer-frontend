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
              sectionClass="portfolio__link portfolio__link_type_text"
              _blank>
              Статичный сайт
            </Link>
            <Link address="https://github.com/DmitryKazancev/how-to-learn"
              sectionClass="portfolio__link portfolio__link_type_follow"
              _blank>
              &#8599;
            </Link>
          </li>
          <li className="portfolio__item">
            <Link address="https://dmitrykazancev.github.io/russian-travel/"
              sectionClass="portfolio__link portfolio__link_type_text"
              _blank>
              Адаптивный сайт
            </Link>
            <Link address="https://dmitrykazancev.github.io/russian-travel/"
              sectionClass="portfolio__link portfolio__link_type_follow"
              _blank>
              &#8599;
            </Link>
          </li>
          <li className="portfolio__item">
            <Link address="https://dmitrykazancev.github.io/react-mesto-auth/"
              sectionClass="portfolio__link portfolio__link_type_text"
              _blank>
              Одностраничное приложение
            </Link>
            <Link address="https://dmitrykazancev.github.io/react-mesto-auth/"
              sectionClass="portfolio__link portfolio__link_type_follow"
              _blank>
              &#8599;
            </Link>
          </li>
        </ul>
      </Section>
    </section>
  );
}