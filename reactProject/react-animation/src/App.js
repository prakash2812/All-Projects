import React, { Component } from 'react';
import './App.css';
import Backdrop from './component/BackDrop/Backdrop';
import Modal from './component/Modal/Modal';
import List from './component/List/List';
import Transition from 'react-transition-group'

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }
  showhandler = () => {
    this.setState({ modalIsOpen: true })
  }
  closeHandler = () => {
    this.setState({ modalIsOpen: false })

  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className='Button' onClick={() => this.setState((prevState) => ({ showBlock: !prevState.showBlock }))}>Toggle
        </button><br />
        {this.state.showBlock ? (<div style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          margin: "auto"

        }}></div>) : null}
        <Modal closed={this.closeHandler} show={this.state.modalIsOpen} />
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showhandler}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
