import React, {PureComponent} from 'react';
import styles from './Card.module.scss'
import Button from '../Button/Button';
import buttons from '../../config/buttons';
import Modal from '../Module/Modal';
import modalContent from '../../config/modalContent';
import ButtonModal from '../ButtonsModal/ButtonModal';
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

  render() {
    const {isOpenModal, closeModalButton, isFavourite } = this.state;
    const {name, price, img, code, color} = this.props;
    const stateInCart = localStorage.getItem(`${name}${code}inCart`);
    const stateFav =  localStorage.getItem(`${name}${code}isFavourite`);

    return (
      <div className={styles.cardWrapper}>
        <div className={styles.favourites}
          onClick={() => {
            {this.setState(current => ({...current, isFavourite: !current.isFavourite}))}
            localStorage.setItem(`${name}${code}isFavourite`, !isFavourite);}}>

          {(stateFav==='false' || !isFavourite) && <Favourite className={styles.svg}/>}
          {(stateFav==='true') && <FavouriteActive className={styles.svg}/>}
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
          closeButton={closeModalButton ? <ButtonModal onClick={this.closeModal} text={buttonModal[3].text}/> : null}
          header={modalContent[0].title} text={modalContent[0].text} closeModal = {this.closeModal}
          actions={
            <>
              <ButtonModal text={buttonModal[0].text}
              onClick={() => {this.setState(current => ({...current, inCart: !current.inCart}));
                localStorage.setItem(`${name}${code}stateInCart`, !stateInCart);
                this.closeModal();}}/>
              <ButtonModal onClick={this.closeModal} text={buttonModal[1].text}/>
            </>
          }/> : null}
      </div>
    )
  }

  closeModal = () => {
    this.setState({isOpenModal: false});
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
