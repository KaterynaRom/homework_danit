import React from "react";
import {Form, Formik} from "formik";
import CustomInput from "../CustumInput/CustumInput";
import { Button } from "@mui/material";
import styles from './SignInForm.module.scss'

const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
    name: '',
    surname: '',
    address: '',
    phone: '',
  };
  const onSubmit = () => {

  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.formWrapper}>
        <CustomInput label="Email" type='text' name='email'/>
        <CustomInput label="Password" type='password' name='password'/>
        <CustomInput label="Name" type='text' name='name'/>
        <CustomInput label="Surname" type='text' name='surname'/>
        <CustomInput label="Address" type='text' name='address'/>
        <CustomInput label="Phone" type='text' name='phone'/>
        <Button className={styles.button} variant="contained" type="submit">Submit</Button>
      </Form>
    </Formik>
  )

}

export default SignInForm;