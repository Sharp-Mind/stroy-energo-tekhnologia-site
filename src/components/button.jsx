import React, { Component } from 'react'

class Foo extends Component {
    handleClick() {
      console.log('По кнопке кликнули');
    }
    render() {
      return <button onClick={() => this.handleClick()}>Нажми на меня</button>;
    }
  }