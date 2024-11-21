import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';
// import { Card } from '@mui/material';
import './Auth.css';
import { Link } from 'react-router-dom';


 const Signup= () => {
  const [formState, inputHandler] = useForm(
    {
      input: {
        value: '',
        isValid: false
      },
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); 
  };

  return (
    <Card className="authentication">
        <h2 className='authentication__header'>Signup Required</h2>
        <hr/>

    <form onSubmit={authSubmitHandler}>
      <Input
        element="input"
        id="input"
        type="text"
        label="User Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid E-mail address."
        onInput={inputHandler}
      />
      <Input
        element="input"
        id="email"
        type="email"
        label="E-Mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid E-mail address."
        onInput={inputHandler}
      />
      <Input
        element="input"
        id="password"
        type='password'
        label="Password"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Password (at least 5 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        RAGISTER NOW
      </Button>
    </form>
      <p>Already have an account?
      <span><Link to='/login'> LOGIN</Link></span>
      </p>
    </Card>
  );
};

export default Signup;
