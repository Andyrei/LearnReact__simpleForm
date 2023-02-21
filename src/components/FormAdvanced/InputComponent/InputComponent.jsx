import React from 'react'
import useInput from '../../../hooks/useInput';

export default function InputComponent(props) {

  return (
    <div className={props.divInputClass}>
            <input type={props.type} placeholder={props.inputValue} id={props.inputValue}
/*                 onChange={props.valueChangeHandler}
                  onBlur={props.inputBlurHandler}
                  value={props.inputValue} */
                />
            <label htmlFor={props.inputValue} className={props.inputValue != ''?"active-label": undefined}>Username</label>
      </div>
  )
}
