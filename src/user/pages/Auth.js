import React, { useContext, useState } from 'react';

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
import { AuthContext } from '../../shared/Context/AuthContext';
// import { Link } from 'react-router-dom';


 const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLogingMode, setIsLogingMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
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

  const switchModeHandler = ()=> {  
    if (!isLogingMode) {
      setFormData (
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
      )
    }
    setIsLogingMode(prevMode => !prevMode);
  }

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); 
    auth.login();
  };

  return (
    <Card className="authentication">
        <h2 className='authentication__header'>Login Required</h2>
        <hr/>

    <form onSubmit={authSubmitHandler}>
      {!isLogingMode &&
         <Input
         element="input"
         id="name"
         type="text" 
         label="User Name"
         validators={[VALIDATOR_REQUIRE()]}
         errorText="Please enter a valid E-mail address."
         onInput={inputHandler}
       />
      }
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
        {isLogingMode ? 'LOGIN' : 'SIGN UP'}
      </Button>
      <p>Don't have an account?
      <span><Button  onClick={switchModeHandler}>{isLogingMode ? 'SIGN UP' : 'LOGIN'} </Button></span>
      </p>
    </form>
    </Card>
  );
};

export default Auth;
