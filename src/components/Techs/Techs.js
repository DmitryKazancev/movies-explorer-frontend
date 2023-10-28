import Section from "../Section/Section.js";
import SectionTitle from "../SectionTitle/SectionTitle";
import Paragraph from "../Paragraph/Paragraph.js";

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <Section sectionClass="techs__container">
        <SectionTitle sectionClass="techs__title">Технологии</SectionTitle>
        <div className="techs__general">
          <p className="techs__subtitle">7 технологий</p>
          <Paragraph sectionClass="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили
            в дипломном проекте.
          </Paragraph>
          <ul className="techs__stack">
            <li className="techs__item"><span className="techs__word">HTML</span></li>
            <li className="techs__item"><span className="techs__word">CSS</span></li>
            <li className="techs__item"><span className="techs__word">JS</span></li>
            <li className="techs__item"><span className="techs__word">React</span></li>
            <li className="techs__item"><span className="techs__word">Git</span></li>
            <li className="techs__item"><span className="techs__word">Express.js</span></li>
            <li className="techs__item"><span className="techs__word">mongoDB</span></li>
          </ul>
        </div>
      </Section>
    </section>
  );
}