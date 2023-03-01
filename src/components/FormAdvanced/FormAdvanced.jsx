/* 
  TODO: IDEA!!
    -> Try to create a component that gets some details and uses the 
        hook's variables
    -> InputComponents should get as props all the needed values to get
        printed and displayed
    -> Keep It Simple Stupid
    -> Don't Repeat Yourself

*/

import InputComponent from "./InputComponent/InputComponent";
import useInput from "../../hooks/useInput";
import './FormAdvanced.css'

const isEmailValid = (email) => {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return emailRegex.test(email);
};

const isUsernameValid  = (username)=>{
  if (username.length >= 8 && username.length <= 20) {
    return true;
  } 
  return false;
}


function FormAdvanced() {

  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangedHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    inputTouchedHandler: usernameTouchedHandler,
    reset: resetUsernameInput
  } = useInput((value)=>isUsernameValid(value.trim()));

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangedHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    inputTouchedHandler: nameTouchedHandler,
    reset: resetNameInput
  } = useInput((value)=>value.trim());

  const {
    value: surname,
    isValid: surnameIsValid,
    hasError: surnameHasError,
    valueChangedHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    inputTouchedHandler: surnameTouchedHandler,
    reset: resetSurnameInput
  } = useInput((value)=>value.trim());

  const {
    value: mail,
    isValid: mailIsValid,
    hasError: mailHasError,
    valueChangedHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    inputTouchedHandler: mailTouchedHandler,
    reset: resetMailInput
  } = useInput((value)=>isEmailValid(value.trim()));

  const formHandler = (e) =>{
    e.preventDefault();

    usernameTouchedHandler(true);
    mailTouchedHandler(true);

    if (!usernameIsValid || !mailIsValid) {
      return;
    }
    
    resetMailInput();
    resetUsernameInput()
  }
  const mailInputClasses = mailHasError ? "input-item invalid" : "input-item";
  const nameInputClasses = nameHasError ? "input-item invalid" : "input-item";
  const surnameInputClasses = surnameHasError ? "input-item invalid" : "input-item";
  
  return (
    <div className="form_container">
      <form onSubmit={formHandler}>
        <div className="grid sm:grid-col-1 xl:grid-cols-2 gap-10">

          <InputComponent
              type={'text'}
              inputValue={username}
              inputHasError={usernameHasError}
              label={'Username'}
            /> 
          <InputComponent
              type={'text'}
              inputValue={mail}
              inputHasError={mailHasError}
              label={'Email'}
            /> 

          <InputComponent
              type={'text'}
              inputValue={surname}
              inputHasError={surnameHasError}
              label={'Surname'}
            /> 
          <InputComponent
              type={'text'}
              inputValue={name}
              inputHasError={nameHasError}
              label={'Name'}
            /> 
        </div>
        
        <div className="input-item">
          <button className='btn btn-100'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default FormAdvanced
