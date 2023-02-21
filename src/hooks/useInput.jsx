import React, {useState} from 'react'

// creating custom hook for input values
export default function useInput(validateValue) {

//! useState Variable
    // setting up the state variables using useState 
   const [enteredVal, setEnteredVal] = useState(''),
         [wasTouched, setWasTouched] = useState(false),
         [infoValue, setInfoValue] = useState();


//! flags Constants
   // setting up the flags for the for the values
            // WAITING FO EXPLENATION
   const   valueIsValid = validateValue(enteredVal),
            //CHECK if value is valid and if it is out of focus
            hasError = !valueIsValid && wasTouched;

//! function Handlers
         // added onChange function
   const valueChangedHandler = (e, info=infoValue)=>{
            setEnteredVal(e.target.value);
            setInfo(info);
         },
         // added to onBlur function
         inputBlurHandler = ()=>{
            setWasTouched(true);
         },
         inputTouchedHandler = ()=>{
            setWasTouched(true);
         };

//! GLOBAL FUNCs
//reset function at the end
   const reset =()=>{
      setEnteredVal('');
      setWasTouched(false);
   }


   
   return ({
      value: enteredVal,
      isValid: valueIsValid,
      hasError,
      infoValue,
      setInfoValue,
      valueChangedHandler,
      inputBlurHandler,
      inputTouchedHandler,
      reset
   })
}
