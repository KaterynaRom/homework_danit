import React, {Component} from 'react';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import styles from './App.module.scss';
import ButtonModal from './components/ButtonsModal/ButtonModal';
import buttonModal from './config/buttonModal';
import modalContent from './config/modalContent';
import buttons from './config/buttons';

class App extends React.Component {
  state = {
    isOpenFirst: false,
    isOpenSecond: false,
    closeModalButton: true,
  }

  render() {
    const {closeModalButton, isOpenFirst, isOpenSecond, } = this.state;

    return (
      <div className={styles.app}>
        <Button text={buttons[0].text} onClick={(event) => {
          this.setState(current => ({...current, isOpenFirst: !current.isOpenFirst}));
          event.target.blur();
        }} backgroundColor={buttons[0].background}/>

        {isOpenFirst ? <Modal
          closeButton={closeModalButton ? <ButtonModal onClick={this.closeModal} text={buttonModal[3].text}/> : null}
          header={modalContent[0].title}
          text={modalContent[0].text}
          closeModal = {this.closeModal}
          actions={<>
            <ButtonModal onClick={this.modalOk} text={buttonModal[0].text}/>
            <ButtonModal onClick={this.modalOk} text={buttonModal[1].text}/>
            </>}/> : null}

        <Button text={buttons[1].text}  onClick={(event) => {
          this.setState(current => ({...current, isOpenSecond: !current.isOpenSecond}));
          event.target.blur();
        }} backgroundColor={buttons[1].background}/>

        {isOpenSecond ? <Modal
          closeButton={closeModalButton ? <ButtonModal onClick={this.closeModal} text={buttonModal[3].text}/> : null}
          header={modalContent[1].title}
          text={modalContent[1].text}
          closeModal = {this.closeModal}
          actions={<ButtonModal onClick={this.modalOk} text={buttonModal[2].text}/>}
        /> : null}
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
