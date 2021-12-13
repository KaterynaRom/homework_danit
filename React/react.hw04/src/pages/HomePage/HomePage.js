
import styles from './HomePage.module.scss';
import {getProductsData} from "../../appStore/actionCreators";
import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Card from "../../components/Card/Card";



const HomePage = () => {
  const products = useSelector((store) => store.card.products, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
    console.log(products)
  },[]);

  return (
    <div>
      <div className={styles.wrapper}>
        <h1>Home Page</h1>
        <div className={styles.cardsContainer}>
          {products && products.map(product =>
            <Card
            // toggleFav={toggleFav} openModal={openModal}
                  key={product.code} name={product.name} price={product.price} img={product.img}
                  color={product.color} code={product.code} isFavourite={product.isFavourite}
            />)}
        </div>
      </div>
    </div>
  )}

export default HomePage;