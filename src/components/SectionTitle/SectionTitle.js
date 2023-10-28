export default function SectionTitle({ sectionClass, children }) {
  return (
    <h3 className={`section-title ${sectionClass}`}>{children}</h3>
  );
}