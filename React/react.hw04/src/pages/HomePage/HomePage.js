import styles from './HomePage.module.scss';
import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Card from "../../components/Card/Card";



const HomePage = () => {
  const products = useSelector((store) => store.card.products, shallowEqual);

  return (
    <div>
      <div className={styles.wrapper}>
        <h1>Home Page</h1>
        <div className={styles.cardsContainer}>
          {products.length > 0 && products.map(product =>
            <Card key={product.code} {...product}/>)}
        </div>
      </div>
    </div>
  )}

export default HomePage;