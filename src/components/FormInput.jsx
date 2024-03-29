import React, { useState } from 'react'

import './forminput.css'

const FormInput = (props) => {
    const { label, errorMessage, onChange, ...inputProps } = props;
    const [isDirty, setIsDirty] = useState(false);

    const handleFocus = (e) => {
        setIsDirty(true);
    };
    return (
        <div className='form-input'>
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                is-dirty={isDirty.toString()}
            />
            <span className='error-message'>{errorMessage}</span>
        </div>
    )
}

const FormInputStatic = ({ label, placeholder, setName }) => {
    return (
        <div className='form-input'>
            <label>{label}</label>
            <input placeholder={placeholder} onChange={e => setName(e.target.value)} />
        </div>
    )
}

const FormInputRef = (props) => {
    return (
        <div className='form-input'>
            <label>{props.label}</label>
            <input ref={props?.refer} placeholder={props?.placeholder} />
        </div>
    )
}

const FormInputSimple = (props) => {
    return (
        <div className='form-input'>
            <label>{props.label}</label>
            <input name={props.name} placeholder={props.placeholder} />
        </div>
    )
}



export {
    FormInput,
    FormInputStatic,
    FormInputRef,
    FormInputSimple
};
