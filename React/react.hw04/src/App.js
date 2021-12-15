import React, {useEffect, useState} from 'react';
import Modal from './components/Modal/Modal';
import styles from './App.module.scss';
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes/Routes';
import Header from './components/Heder/Header';
import modalContent from './config/modalContent';
import Button from './components/Button/Button';
import buttonModal from './config/buttonModal';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getProductsData} from "./appStore/actionCreators";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  },[]);

  return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header/>
          <Routes/>
          <Modal/>
        </div>
      </BrowserRouter>
  )
}

export default App;