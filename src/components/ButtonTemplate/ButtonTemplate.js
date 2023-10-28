export default function ButtonTemplate({ sectionClass, label, handleClick, children, buttonType }) {

  return (
    <button type={buttonType}
      aria-label={label}
      className={`button button_focus ${sectionClass}`}
      onClick={handleClick}>
      {children}
    </button>
  )
}