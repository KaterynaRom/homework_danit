import React, {useEffect, useState} from 'react';
import styles from './Card.module.scss'
import Button from '../Button/Button';
import buttons from '../../config/buttons';
import {ReactComponent as Favourite} from '../../icons/favourite.svg';
import {ReactComponent as FavouriteActive} from '../../icons/fav_active.svg';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {name, price, img, code, color, openModal, toggleFav, isFavourite } = props;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.favourites} onClick={() => {
        toggleFav();
        console.log('toggle')
      }}>
        {isFavourite ? <FavouriteActive/> : <Favourite/>}
      </div>

      <p className={styles.name}>{name}</p>
      <img className={styles.img} src={img} alt={name}/>
      <p className={styles.price}>price: {price}$</p>
      <p className={styles.colorProduct}>color: {color}</p>
      <p className={styles.code}>Code: {code}</p>
      <Button onClick={() => openModal(name)} className={styles.buttonAdd} text={buttons[0].text}/>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  actions: PropTypes.element,
  code: PropTypes.number.isRequired,
  color: PropTypes.string,
}

Card.defaultProps = {
  color: 'no color information',
  actions: '<></>',
}

export default Card;
