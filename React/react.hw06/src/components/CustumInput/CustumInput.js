import React from "react";
import { useField } from 'formik';
import { TextField } from '@mui/material';
import styles from './CustumInput.module.scss';


const CustomInput = (props) => {
  const { label, type } = props;
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <div className={styles.input}>
      <TextField {...field} label={label} type={type}/>
      {isError && <span style={{ color: 'red' }}>{meta.error}</span>}
    </div>
  )
}

export default CustomInput