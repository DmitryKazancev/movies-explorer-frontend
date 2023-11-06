import Section from "../Section/Section"
import icon from '../../images/search-icon.svg';
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function SearchForm({ handleSearchSubmit, searchString,
  checkIsShort, isShort, handleSearchString, emptySearchError }) {
  
   function handleSubmit(e) {
    e.preventDefault();
    handleSearchSubmit();
  }

  function handleChange(e) {
    handleSearchString(e);
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
              name="search"
              value={searchString}
              onChange={handleChange}
              aria-label="search-form"
              placeholder="Фильм"
              autoComplete="on"/>
            <button type="submit"
              className="button button_focus search-form__submit"
              aria-label="submit"></button>
          </form>
          <div className="search-form__border"></div>
          <ToggleSwitch sectionClass="search-form__checkbox"
            checkIsShort={checkIsShort}
            isShort={isShort} />
        </div>
        <span className="search-form__error">{emptySearchError}</span>
      </Section>
    </section>
  )
}
