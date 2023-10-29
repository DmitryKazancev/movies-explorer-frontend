import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import Section from "../Section/Section";

export default function AddCards(){
  return (
    <section className="cards-add">
      <Section>
        <ButtonTemplate sectionClass="cards-add__button">Ещё</ButtonTemplate>
      </Section>
    </section>
  )
}