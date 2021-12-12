import styles from './Card.module.scss'
import Button from '../Button/Button';
import buttons from '../../config/buttons';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import {getProductsData} from "../../appStore/actionCreators";
import {ReactComponent as Favourite} from '../../icons/favourite.svg';
import {ReactComponent as FavouriteActive} from '../../icons/fav_active.svg';


const Card = (props) => {
  const {name, price, img, code, color, isFavourite } = props;


  return (
    <div className={styles.cardWrapper}>
      <div className={styles.favourites} onClick={() => {
        // toggleFav(name);
      }} >
        {isFavourite ? <FavouriteActive/> : <Favourite/>}
      </div>
      <p className={styles.name}>{name}</p>
      <img className={styles.img} src={img} alt={name}/>
      <p className={styles.price}>price: {price}$</p>
      <p className={styles.colorProduct}>color: {color}</p>
      <p className={styles.code}>Code: {code}</p>
      <Button
        // onClick={() => {openModal(code)}
        className={styles.buttonAdd} text={buttons[0].text}/>
    </div>
  )
}

export default Card;
