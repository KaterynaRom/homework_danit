import React, {Component} from 'react';
import Modal from './components/Module/Modal';
import Button from './components/Button/Button';

class App extends React.Component {
  state = {
    isOpenFirst: false,
    isOpenSecond: false,
    closeButton: true,
    buttons: [
      {
        text: 'Open first modal',
        background: 'red'
      },
      {
        text: 'Open second modal',
        background: '#f0b6b6',
      },
    ],

    modalWindows: [
      {
        closeButton: true,
        title: 'fddg',
        text: 'fdfdfgvfgg katya',
      },

      {
        closeButton: true,
        title: 'sffeszfggg222222',
        text: 'fdfdfgvfgg 222222222222222',
      },
    ],
  }

  render() {
    const { buttons, modalWindows, closeButton, isOpenFirst, isOpenSecond } = this.state;

    return (
      <div className="App">
        <Button text={buttons[0].text} onClick={(event) => {
          this.setState(current => ({...current, isOpenFirst: !current.isOpenFirst}));
          event.target.blur();
        }} backgroundColor={buttons[0].background}/>

        {(isOpenFirst && closeButton) ? <Modal
          closeButton={<button>✖</button>}
          title={modalWindows[0].title}
          text={modalWindows[0].text}
          closeModal = {this.closeModal}
          actions={<><button onClick={this.closeModal}>Ok</button>
            <button onClick={this.closeModal}>Cancel</button></>}
        /> : null}

        <Button text={buttons[1].text}  onClick={(event) => {
          this.setState(current => ({...current, isOpenSecond: !current.isOpenSecond}));
          event.target.blur();
        }} backgroundColor={buttons[1].background}/>

        {isOpenSecond ? <Modal
          title={modalWindows[1].title}
          text={modalWindows[1].text}
          closeModal = {this.closeModal}
          actions={<><button onClick={this.closeModal}>Ok</button>
            <button onClick={this.closeModal}>Cancel</button></>}
        /> : null}
      </div>
    );
  }

  openModal = () => {
  this.setState({
    isOpenFirst: true,
    isOpenSecond: true,
    })
  }

  closeModal = () => {
  this.setState({
    isOpenFirst: false,
    isOpenSecond: false,
    })
  }
}

export default App;
