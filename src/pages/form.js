import * as React from "react"
import { FormInput } from "../components/FormInput"

const FormPage = () => {
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const inputs = [
        {
            id: 1,
            name: 'name',
            placeholder: 'Name',
            label: 'Name',
            errorMessage: '',
            required: true
        },
        {
            id: 2,
            name: 'email',
            placeholder: 'E-mail',
            label: 'E-mail',
            errorMessage: 'Invalid email address'
        },
        {
            id: 3,
            name: 'message',
            placeholder: 'Message',
            label: 'Message',
            errorMessage: ''
        }
    ]

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
    };

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    console.log(values);

    return (
        <form onSubmit={onSubmit}>
            <h1>Form: useState</h1>
            {inputs.map(input => (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
        </form>
    )
}

export default FormPage

export const Head = () => <title>Form</title>
