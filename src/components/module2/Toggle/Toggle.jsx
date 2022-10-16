import React, { Component } from 'react';
import css from './Toggle.module.css'




export class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    console.log(this.props);
    console.log(this.state);


    return (
      <>
        <button onClick={this.show} className={css.button}>
          Show
        </button>
        <button onClick={this.hide} className={css.button}>
          Hide
        </button>
        {isOpen && children}
      </>
    );
  }
}