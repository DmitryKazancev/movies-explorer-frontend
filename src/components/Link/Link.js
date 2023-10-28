export default function Link({ address, sectionClass, children, _blank }) {
  return (
    <a href={address}
      className={`link ${sectionClass}`}
      rel="noopener noreferrer"
      target={_blank ? "_blank" : "_self"}
      >
      {children}
    </a>
  );
}