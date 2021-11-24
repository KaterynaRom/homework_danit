import React, {Component} from 'react';
import CardsContainer from './components/CardsContainer/CardsContainer';
import styles from './App.module.scss';

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
    const { products } = this.state;

    return (
      <div className={styles.wrapper}>
        <CardsContainer products={products}/>
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
