import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import Section from "../Section/Section";

export default function AddCards({ onClick }){
  return (
    <section className="cards-add">
      <Section>
        <ButtonTemplate sectionClass="cards-add__button"
        buttonType="button"
        label='Показать ещё'
        onClick={onClick}>Ещё</ButtonTemplate>
      </Section>
    </section>
  )
}