import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import * as yup from 'yup';
import axios from 'axios';

const initialValue = {
  name: '',
  email: '',
  password: '',
}
const initialErrors = {
  name:'',
  email: '',
  password: '',
  }
function App() {
  const [ formValue, setFormValue ] = useState(initialValue);
  const [ errors, setErrors ] = useState(initialErrors);
  const [disabled, setDisabled ] = useState(true);
  
  const schema = yup.object().shape({
    name: yup
    .string()
    .required('*Enter your name'),
    email: yup
    .string()
    .required('*Enter a valid email'),
    password: yup
    .string()
    .required('*Enter your password')
  });
  const changeHandler = (name, value) => {
    yup.reach(schema, name)
        .validate(value)
        .then(() => {
          setErrors({ ...errors, [name]: "" })
        }).catch(err => {
          console.log(err)
          setErrors({ ...errors, [name]: err.errors[0] })
        });
    setFormValue({...formValue, [name]: value})

  }
  const submitHandler = () => {
    setFormValue(initialValue)
  }
  useEffect(() => {
    schema.isValid(formValue).then((valid) => {
        setDisabled(!valid)
    })
    }, [formValue, schema]);
  return (
    <>
    <Form value={formValue} change={changeHandler} submit={submitHandler} disabled={disabled} errors={errors}/>
    </>
  );
}

export default App;
