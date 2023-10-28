import { useContext } from 'react';
import { SignContext } from '../../Context/SignContext.js';

export default function InputField(props) {

  const { values, handleChange, errors } = useContext(SignContext);

  return (
    <label className="input-field">
      {props.children}
      <input className="input-field__input"
        name={props.name}
        value={values[props.name] || ''}
        onChange={handleChange}
        type={props.type}
        placeholder={props.placeholder}
        aria-label={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required />
      <span className={`input-field__error ${errors[props.name] ? "input-field__error_active" : ""}`}>{errors[props.name]}</span>
    </label>
  )
}
