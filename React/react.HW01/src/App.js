import React, {Component} from 'react';
import Modal from './components/Module/Modal';
import Button from './components/Button/Button';
import styles from './App.module.scss'

class App extends React.Component {
  state = {
    isOpenFirst: false,
    isOpenSecond: false,
    closeModalButton: true,
    buttons: [
      {
        text: 'Open first modal',
        background: 'red'
      },
      {
        text: 'Open second modal',
        background: '#211eb3',
      },
    ],

    modalWindows: [
      {
        closeButton: true,
        title: 'Do you want to delete this file?',
        text: 'Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?',
      },

      {
        closeButton: true,
        title: 'Do you want to go to another site?',
        text: 'By confirming this action, you consent to the processing of your personal data. Send your personal data?',
      },
    ],
  }

  render() {
    const { buttons, modalWindows, closeModalButton, isOpenFirst, isOpenSecond } = this.state;

    return (
      <div className={styles.app}>
        <Button text={buttons[0].text} onClick={(event) => {
          this.setState(current => ({...current, isOpenFirst: !current.isOpenFirst}));
          event.target.blur();
        }} backgroundColor={buttons[0].background}/>

        {isOpenFirst ? <Modal
          closeButton={closeModalButton ? <button onClick={this.closeModal}>✖</button> : null}
          header={modalWindows[0].title}
          text={modalWindows[0].text}
          closeModal = {this.closeModal}
          actions={<><button onClick={this.modalOk}>Ok</button>
            <button onClick={this.closeModal}>Cancel</button></>}
        /> : null}

        <Button text={buttons[1].text}  onClick={(event) => {
          this.setState(current => ({...current, isOpenSecond: !current.isOpenSecond}));
          event.target.blur();
        }} backgroundColor={buttons[1].background}/>

        {isOpenSecond ? <Modal
          closeButton={closeModalButton ? <button onClick={this.closeModal}>✖</button> : null}
          header={modalWindows[1].title}
          text={modalWindows[1].text}
          closeModal = {this.closeModal}
          actions={<><button onClick={this.modalOk}>Submit</button></>}
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
