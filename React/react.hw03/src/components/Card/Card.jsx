import React, {useEffect, useState} from 'react';
import styles from './Card.module.scss'
import Button from '../Button/Button';
import buttons from '../../config/buttons';
import Modal from '../Modal/Modal';
import modalContent from '../../config/modalContent';
import buttonModal from '../../config/buttonModal';
import {ReactComponent as Favourite} from '../../icons/favourite.svg';
import {ReactComponent as FavouriteActive} from '../../icons/fav_active.svg';
import PropTypes from 'prop-types';

const Card = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCloseModalBtn, setIsCloseModalBtn] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);
  const [inCart, setInCart] = useState(false);

  const {name, price, img, code, color} = props;

  useEffect(() => {
    localStorage.getItem(`${name}${code}isFavourite`);
  }, [isFavourite])

  const stateInCart = localStorage.getItem(`${name}${code}inCart`);


  const stateFav = (name, code) => {
    localStorage.getItem(`${name}${code}isFavourite`);
  }

    return (
      <div className={styles.cardWrapper}>
        <div className={styles.favourites} onClick={ () => setIsFavourite(!isFavourite)}>

          {(stateFav === 'true') ? setIsFavourite(true) : null}
          {(!isFavourite) && <Favourite className={styles.svg}/>}
          {(isFavourite) && <FavouriteActive className={styles.svg}/>}
        </div>

        <p className={styles.name}>{name}</p>
        <img className={styles.img} src={img} alt={name}/>
        <p className={styles.price}>price: {price}$</p>
        <p className={styles.colorProduct}>color: {color}</p>
        <p className={styles.code}>Code: {code}</p>
        <Button onClick={() => setIsOpenModal(!isOpenModal)} className={styles.buttonAdd} text={buttons[0].text}/>

        {isOpenModal ? <Modal
          closeButton={isCloseModalBtn ? <Button onClick={() => setIsOpenModal(false)} text={buttonModal[3].text}/> : null}
          header={modalContent[0].title} text={modalContent[0].text} closeModal = {() => setIsOpenModal(false)}
          actions={
            <>
              <Button text={buttonModal[0].text}
              onClick={() => {
                setInCart(!inCart);
                localStorage.setItem(`${name}${code}stateInCart`,  JSON.stringify(!stateInCart));
                setIsOpenModal(false);
              }}/>
              <Button onClick={() => setIsOpenModal(false)} text={buttonModal[1].text}/>
            </>}/> : null}
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