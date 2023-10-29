import Section from "../Section/Section"
import icon from '../../images/search-icon.svg';
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function SearchForm({ onSubmit }) {
  function handleSubmit(e) {
    e.prevenDefault();
    onSubmit();
  }
  return (
    <section className="search-form">
      <Section sectionClass="search-form__container">
        <div className="search-form__search-box">
          <form className="search-form__form"
            onSubmit={handleSubmit}>
            <img src={icon}
              className="search-form__icon"
              alt="icon" />
            <input className="search-form__input"
              type="text"
              aria-label="search-form"
              placeholder="Фильм"
              autoComplete="on"
              required />
            <button type="submit"
              className="search-form__submit"
              aria-label="submit"></button>
          </form>
          <div className="search-form__border"></div>
          <ToggleSwitch sectionClass="search-form__checkbox" />
        </div>
      </Section>
    </section>
  )
}
