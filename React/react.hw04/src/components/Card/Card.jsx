import styles from './Card.module.scss'
import Button from '../Button/Button';
import buttons from '../../config/buttons';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import {getProductsData, setIsOpenModal} from "../../appStore/actionCreators";
import {ReactComponent as Favourite} from '../../icons/favourite.svg';
import {ReactComponent as FavouriteActive} from '../../icons/fav_active.svg';
import {toggleIsFavourite} from "../../appStore/actionCreators";

const Card = (props) => {
  const {name, price, img, code, color, isFavourite } = props;
  const dispatch = useDispatch();

  const isOpenModal = useSelector((store) => store.modal.isOpenModal, shallowEqual);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.favourites}
           onClick={() => {dispatch(toggleIsFavourite(code))}}
      >
        {isFavourite ? <FavouriteActive/> : <Favourite/>}
      </div>
      <p className={styles.name}>{name}</p>
      <img className={styles.img} src={img} alt={name}/>
      <p className={styles.price}>price: {price}$</p>
      <p className={styles.colorProduct}>color: {color}</p>
      <p className={styles.code}>Code: {code}</p>
      <Button
        onClick={() => dispatch(setIsOpenModal(true))}
        // onClick={() => {openModal(code)}
        className={styles.buttonAdd} text={buttons[0].text}/>
    </div>
  )
}

export default Card;
