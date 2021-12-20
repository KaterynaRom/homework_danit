import React from "react";
import { useField } from 'formik';
import { TextField } from '@mui/material';

const CustomInput = (props) => {
  const { label, type } = props;
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <>
      <TextField {...field} label={label} type={type}/>
      {isError && <span style={{ color: 'red' }}>{meta.error}</span>}
    </>
  )
}

export default CustomInput