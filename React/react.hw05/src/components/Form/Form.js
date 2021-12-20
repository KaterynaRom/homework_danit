import React from "react";
import {Form, Formik} from "formik";
import CustomInput from "../CustumInput/CustumInput";
import { Button } from "@mui/material";

const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = () => {

  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <CustomInput label="Email" type='text' name='email'/>
        <CustomInput label="Пароль" type='password' name='password'/>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  )

}

export default SignInForm;