import { useRef,useState } from 'react';
import classes from './Checkout.module.css';
const isEmpty = value => value.trim() === '';
const isSixChars = value => value.trim().length === 6;

const Checkout = (props) => {
    const [forminputsValidity,setFormInputsValidity]=useState({
        name:true,
        street:true,
        city:true,
        postalCode:true
    })
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isSixChars(enteredPostalCode);

        setFormInputsValidity({
            name:enteredNameIsValid,
            street:enteredStreetIsValid,
            city:enteredCityIsValid,
            postalCode:enteredPostalCodeIsValid
        });

        const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredPostalCodeIsValid && enteredStreetIsValid;

        if(!formIsValid){
         return;
        }
        props.onConfirm({
            name:enteredName,
            street:enteredCity,
            postalCode:enteredPostalCode,
            city:enteredCity
        });

    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${forminputsValidity.name?'':classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!forminputsValidity.name && <p>Plese enter a valid name!</p>}
            </div>
            <div className={`${classes.control} ${forminputsValidity.street?'':classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!forminputsValidity.street && <p>Plese enter a valid street!</p>}
            </div>
            <div className={`${classes.control} ${forminputsValidity.postalCode?'':classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef} />
                {!forminputsValidity.postalCode && <p>Plese enter a valid psotal code!(6 chars long)</p>}
            </div>
            <div className={`${classes.control} ${forminputsValidity.city?'':classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!forminputsValidity.name && <p>Plese enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;