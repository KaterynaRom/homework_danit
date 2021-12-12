import React, {useEffect, useState} from 'react';
import Modal from './components/Modal/Modal';
import styles from './App.module.scss';
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes/Routes';
import Header from './components/Heder/Header';
import modalContent from './config/modalContent';
import Button from './components/Button/Button';
import buttonModal from './config/buttonModal';
import {Provider, shallowEqual, useDispatch, useSelector} from "react-redux";
import store from "./appStore";
import {getProductsData} from "./appStore/actionCreators";

const App = () => {

  // const products = useSelector((store) => store.card.products, shallowEqual);
  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(getProductsData());
  // },[]);

  // useEffect(() => {
  //   (async() => {
  //     const response = await fetch('./productsList.json')
  //       .then(response => response.json());
  //
  //     const favStatus = localStorage.getItem('favourites') || [];
  //     response.forEach(prod => prod.isFavourite = favStatus.includes(prod.code));
  //     setProducts(response);
  //
  //     const cartStatusLS = JSON.parse(localStorage.getItem('cart'));
  //     if (cartStatusLS) {setCart(cartStatusLS)}
  //   })()
  // },[]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header/>
          <Routes/>
          {/*<Modal/>*/}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;