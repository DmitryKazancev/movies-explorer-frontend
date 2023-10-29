export default function SectionTitle({ sectionClass, children }) {
  return (
    <h2 className={`section-subtitle ${sectionClass}`}>{children}</h2>
  );
}