import './App.css';
import React, { useState } from 'react'
import Form from './Form'
const initialValue = {
  name: '',
  email: '',
  password: '',
}
function App() {
  const [ formValue, setFormValue ] = useState(initialValue);

  const changeHandler = (name, value) => {
    setFormValue({...formValue, [name]: value})

  }
  const submitHandler = () => {
    setFormValue(initialValue)
  }
  return (
    <>
    <Form value={formValue} change={changeHandler} submit={submitHandler} />
    </>
  );
}

export default App;
