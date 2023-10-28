export default function ToggleSwitch({sectionClass}) {

  return (
    <label className={`tooggle-switch ${sectionClass}`}>
      <input type='checkbox'
        className="tooggle-switch__input"
        name="tooggle-switch"/>
      <span className="tooggle-switch__box"></span>
      Короткометражки
    </label>
  )
}