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
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: enteredUsernameHasError,
    valueChangedHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    inputTouchedHandler: usernameTouchedHandler,
    reset: resetUsernameInput
  } = useInput((value)=>isUsernameValid(value.trim()));

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangedHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    inputTouchedHandler: nameTouchedHandler,
    reset: resetNameInput
  } = useInput((value)=>value.trim());

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    hasError: enteredSurnameHasError,
    valueChangedHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    inputTouchedHandler: surnameTouchedHandler,
    reset: resetSurnameInput
  } = useInput((value)=>value.trim());

  const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    hasError: enteredMailHasError,
    valueChangedHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    inputTouchedHandler: mailTouchedHandler,
    reset: resetMailInput
  } = useInput((value)=>isEmailValid(value.trim()));

  const formHandler = (e) =>{
    e.preventDefault();

    usernameTouchedHandler(true);
    mailTouchedHandler(true);

    if (!enteredUsernameIsValid || !enteredMailIsValid) {
      return;
    }

    console.log(`Username: ${enteredUsername}\nMail: ${enteredMail}`);
    
    resetMailInput();
    resetUsernameInput()
  }

  const usernameInputClasses = "input-item"
  const mailInputClasses = enteredMailHasError ? "input-item invalid" : "input-item";
  const nameInputClasses = enteredNameHasError ? "input-item invalid" : "input-item";
  const surnameInputClasses = enteredSurnameHasError ? "input-item invalid" : "input-item";
  
  return (
    <div className="form_container">
      <form onSubmit={formHandler}>
        <div className="grid sm:grid-col-1 xl:grid-cols-2 gap-10">
        <div className={usernameInputClasses}>
            <input type="text" placeholder='username' id='username'
                onChange={()=>{this.bind.usernameChangeHandler(this, `${<span>Works</span>}`)}}
                onBlur={usernameBlurHandler}
                value={enteredUsername}
                />
            <label htmlFor="username" className={enteredUsername != ''?"active-label": undefined}>Username <span>(containing at list 8 chars and not more than 20 chars)</span></label>
          </div>

          
{/*           <InputComponent
              divInputClass={usernameInputClasses}
              type={'text'}
              inputValue={'username'}
              /> */}


          <div className={nameInputClasses}>
            <input type="text" placeholder='name' id='name'
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
                />
            <label htmlFor="username" className={enteredName != ''?"active-label": undefined}>Name</label>
          </div>
          <div className={surnameInputClasses}>
            <input type="text" placeholder='surname' id='surname'
                onChange={surnameChangeHandler}
                onBlur={surnameBlurHandler}
                value={enteredSurname}
                />
            <label htmlFor="username" className={enteredSurname != ''?"active-label": undefined}>Surname</label>
          </div>
          <div className={mailInputClasses}>
            <input type="text" placeholder='mail' id='mail'
                  onChange={mailChangeHandler}
                  onBlur={mailBlurHandler}
                  value={enteredMail}
                  />
            <label htmlFor="mail" className={enteredMail != ''?"active-label": undefined} >E-mail</label>
          </div>
          <div className={mailInputClasses}>
            <input type="text" placeholder='mail' id='mail'
                  onChange={mailChangeHandler}
                  onBlur={mailBlurHandler}
                  value={enteredMail}
                  />
            <label htmlFor="mail" className={enteredMail != ''?"active-label": undefined} >E-mail <span>(example: mario.rossi@mail.com)</span></label>
          </div>
        </div>
        
        <div className="input-item">
          <button className='btn btn-100'>Submit</button>
        </div>
        {enteredMailHasError && (<p className='error-text'>Enter a valid mail.</p>)}
        {/* {enteredUsernameHasError && (<p className='error-text'>Username must not be empty.</p>)} */}

      </form>
    </div>
  )
}

export default FormAdvanced
