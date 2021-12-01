import React, {PureComponent} from 'react';
import styles from './Card.module.scss'
import Button from '../Button/Button';
import buttons from '../../config/buttons';
import Modal from '../Modal/Modal';
import modalContent from '../../config/modalContent';
import buttonModal from '../../config/buttonModal';
import {ReactComponent as Favourite} from '../../icons/favourite.svg';
import {ReactComponent as FavouriteActive} from '../../icons/fav_active.svg';
import PropTypes from 'prop-types';

class Card extends PureComponent {
  state = {
    isOpenModal: false,
    closeModalButton: true,
    isFavourite: false,
    inCart: false,
  }

  closeModal = () => {
    this.setState({isOpenModal: false});
  }

  render() {
    const { isOpenModal, closeModalButton, isFavourite } = this.state;
    console.log(isFavourite)
    const {name, price, img, code, color} = this.props;
    const stateInCart = localStorage.getItem(`${name}${code}inCart`);
    const stateFav =  localStorage.getItem(`${name}${code}isFavourite`);

    return (
      <div className={styles.cardWrapper}>
        <div className={styles.favourites}
          onClick={() => {
            {this.setState(current => ({...current, isFavourite: !current.isFavourite}))}
            localStorage.setItem(`${name}${code}isFavourite`, (!isFavourite).toString())}
          }>

          {(stateFav === 'true') ? (this.setState(current => ({...current, isFavourite: true}))) : null}
          {(!isFavourite) && <Favourite className={styles.svg}/>}
          {(isFavourite) && <FavouriteActive className={styles.svg}/>}
        </div>

        <p className={styles.name}>{name}</p>
        <img className={styles.img} src={img} alt={name}/>
        <p className={styles.price}>price: {price}$</p>
        <p className={styles.colorProduct}>color: {color}</p>
        <p className={styles.code}>Code: {code}</p>
        <Button className={styles.buttonAdd} text={buttons[0].text} onClick={() => {
          this.setState(current => ({...current, isOpenModal: !current.isOpenModal}));
        }}/>

        {isOpenModal ? <Modal
          closeButton={closeModalButton ? <Button onClick={this.closeModal} text={buttonModal[3].text}/> : null}
          header={modalContent[0].title} text={modalContent[0].text} closeModal = {this.closeModal}
          actions={
            <>
              <Button text={buttonModal[0].text}
              onClick={() => {this.setState(current => ({...current, inCart: !current.inCart}));
                localStorage.setItem(`${name}${code}stateInCart`, !stateInCart);
                this.closeModal();}}/>
              <Button onClick={this.closeModal} text={buttonModal[1].text}/>
            </>}/> : null}
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired,
  color: PropTypes.string,
}

Card.defaultProps = {
  color: 'no color information',
}

export default Card;
