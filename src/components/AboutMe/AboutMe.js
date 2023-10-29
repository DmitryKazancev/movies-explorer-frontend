import Section from "../Section/Section.js";
import SectionTitle from "../SectionTitle/SectionTitle.js";
import photo from '../../images/about-me-photo.png';
import Link from "../Link/Link.js";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <Section sectionClass="about-me__container">
        <SectionTitle sectionClass="about-me__title">Студент</SectionTitle>
        <div className="about-me__resume">
          <img
            src={photo}
            className="about-me__photo"
            alt="фотография разработчика" />
          <div className="about-me__brief">
            <p className="about-me__subtitle">Дмитрий</p>
            <p className="about-me__prof">Фронтенд-разработчик, 35 лет</p>
            <p className="about-me__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ.
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
              Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке, начал заниматься
              фриланс-заказами и ушёл с постоянной работы.
            </p>
            <Link address="https://github.com/DmitryKazancev"
              sectionClass="about-me__link"
              _blank>
              Github
            </Link>
          </div>
        </div>
      </Section>
    </section>
  );
}