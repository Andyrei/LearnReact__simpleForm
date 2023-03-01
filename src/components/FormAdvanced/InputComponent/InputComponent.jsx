import React from 'react'
import useInput from '../../../hooks/useInput';

export default function InputComponent(props) {

  return (
    <div className="">
      <div className={props.inputHasError ? "input-item invalid" : "input-item"}>
              <input type={props.type} placeholder={props.inputValue} id={props.inputValue}
                    onChange={props.valueChangeHandler}
                    onBlur={props.inputBlurHandler}
                    value={props.inputValue}
                  />
              <label 
                  htmlFor={props.inputValue} 
                  className={props.inputValue != ''?"active-label": undefined}>
                  {props.label}
              </label>
      </div>
      {props.inputHasError && (<p className='error-text'>Input is not valid</p>)}
    </div>
  )
}
