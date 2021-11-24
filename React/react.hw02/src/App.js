import React, {Component} from 'react';
import Modal from "./components/Module/Modal";
import Button from './components/Button/Button';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Card from './components/Card/Card';
import styles from './App.module.scss';
import ButtonModal from './components/ButtonsModal/ButtonModal';
import buttonModal from './config/buttonModal';
import modalContent from './config/modalContent';
import buttons from './config/buttons';




class App extends React.Component {
  state = {
    isOpenFirst: false,
    closeModalButton: true,
    isFavourite: false,
    products: [],
  }

  async componentDidMount() {
    const response = await fetch('./productsList.json')
      .then(res => res.json());
    this.setState(current => ({...current, products: response}));
  }

  render() {
    const {closeModalButton, isOpenFirst, products } = this.state;

    return (
      <div className={styles.wrapper}>

          <CardsContainer products={products}
            // toggleFav={toggleFav} addItem={addItem}
          />
        {/*<div>*/}
        {/*  <Card items={cartItems}/>*/}
        {/*</div>*/}
      </div>
    );

  }

  modalOk = () => {
    console.log('Ok');
    this.closeModal()
  }

  closeModal = () => {
    this.setState({
      isOpenFirst: false,
      isOpenSecond: false,
    })
  }
}

export default App;
