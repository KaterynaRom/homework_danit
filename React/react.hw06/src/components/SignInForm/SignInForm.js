import React from "react";
import {Form, Formik} from "formik";
import CustomInput from "../CustumInput/CustumInput";
import { Button } from "@mui/material";
import styles from './SignInForm.module.scss';
import * as yup from 'yup';

const SignInForm = () => {
  const initialValues = {
    email: '',
    name: '',
    surname: '',
    age: '',
    address: '',
    phone: '',
  };

  const onSubmit = (values) => {
    console.log(values)
  }

  const validationSchema = yup.object().shape({
    email: yup.string().required('Поле не заполнено').email('Неправильный email'),
    name: yup.string().required('Поле не заполнено'). min(3, 'Введите больше трех символов'),
    surname: yup.string().required('Поле не заполнено'). min(3, 'Введите больше трех символов'),
    age: yup.number('Поле не заполнено').required().min(18, 'Покупки могут совершать лица, старше 18 лет'),
    address: yup.string().required('Поле не заполнено'). min(8, 'Введите больше восьми символов'),
    phone: yup.number()
      .required('Поле не заполнено')
      .min(10, 'Введите больше десяти символов')
      .typeError("Введите только цифры")
      .integer('Телефонный номер не содержит точек'),
  });


  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form className={styles.formWrapper}>
        <CustomInput label="Email" type='text' name='email'/>
        <CustomInput label="Name" type='text' name='name'/>
        <CustomInput label="Surname" type='text' name='surname'/>
        <CustomInput label="Age" type='age' name='age'/>
        <CustomInput label="Address" type='text' name='address'/>
        <CustomInput label="Phone" type='text' name='phone'/>
        <Button className={styles.button} variant="contained" type="submit">Buy</Button>
      </Form>
    </Formik>
  )

}

export default SignInForm;