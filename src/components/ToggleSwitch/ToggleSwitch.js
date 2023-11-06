export default function ToggleSwitch({ sectionClass, checkIsShort, isShort }) {

  function handleChange(e) {
    checkIsShort(e);
  }

  return (
    <label className={`tooggle-switch ${sectionClass}`}>
      <input type='checkbox'
        onChange={handleChange}
        checked={isShort}
        className="tooggle-switch__input"
        name="tooggle-switch"/>
      <span className="tooggle-switch__box"></span>
      Короткометражки
    </label>
  )
}