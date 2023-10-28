import Section from "../Section/Section.js";
import SectionTitle from "../SectionTitle/SectionTitle.js";
import Paragraph from "../Paragraph/Paragraph.js";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <Section sectionClass="about-project__container">
        <SectionTitle sectionClass="about-project__title">О проекте</SectionTitle>
        <div className="about-project__general">
          <div className="about-project__paragraphs">
            <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
            <Paragraph sectionClass="about-project__text">
              Составление плана, работу над бэкендом,
              вёрстку, добавление функциональности и финальные доработки.
            </Paragraph>
          </div>
          <div className="about-project__paragraphs">
            <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
            <Paragraph sectionClass="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
              чтобы успешно защититься.
            </Paragraph>
          </div>
        </div>
        <ul className="about-project__syllabus">
          <li className="about-project__item about-project__item_color_blue">1 неделя</li>
          <li className="about-project__item about-project__item_color_gray">4 недели</li>
          <li className="about-project__item about-project__item_text">Back-end</li>
          <li className="about-project__item about-project__item_text">Front-end</li>
        </ul>
      </Section>
    </section>
  );
}