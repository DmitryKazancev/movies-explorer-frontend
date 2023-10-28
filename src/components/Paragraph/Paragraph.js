export default function Paragraph({ sectionClass, children }) {
  return (
    <p className={`paragraph ${sectionClass}`}>{children}</p>
  );
}