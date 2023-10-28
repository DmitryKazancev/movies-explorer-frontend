export default function Section({ sectionClass, children}) {
  return (
    <div className={`section-main ${sectionClass}`}>
      {children}
    </div>
  );
}