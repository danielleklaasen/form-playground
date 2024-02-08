import * as React from "react"
import { FormInputStatic, FormInputRef, FormInputSimple } from "../components/FormInput"

const IndexPage = () => {
  const [name, setName] = React.useState('');
  console.log('1: useState', name);

  const nameRef = React.useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('2: useRef', nameRef.current.value);
  };

  const onSubmitFormData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log('3: FormData', Object.fromEntries(data.entries()));
  };

  return (
    <>
      <form>
        <h2>Form 1: useState</h2>
        <p>
          Upside: you can respond to changes<br />
          Minor downside: the component re-renders on every update</p>
        <FormInputStatic placeholder='Name' setName={setName} label='Name' />
      </form>
      <a href='/form'>See more about forms with useState</a>
      <br /><br />
      <form onSubmit={onSubmit}>
        <h2>Form 2: useRef hook</h2>
        <p>Prevents re-rendering the component.</p>
        <FormInputRef refer={nameRef} placeholder='Name' label='Name' />
        <button>Submit</button>
      </form>
      <br /><br />
      <form onSubmit={onSubmitFormData}>
        <h2>Form 3: FormData</h2>
        <p>No re-renders. Easy access to data.</p>
        <FormInputSimple name='name' placeholder='Name' label='Name' />
        <FormInputSimple name='email' placeholder='E-mail' label='E-mail' />
        <FormInputSimple name='message' placeholder='Message' label='Message' />
        <button>Submit</button>
      </form>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
