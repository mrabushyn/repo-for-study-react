import React, { Component } from 'react';
import css from './Feedback.module.css'

export const Feedback = () => {
  return <div></div>;
};

export class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);

    this.state = {
      value: this.props.initialValue,
  }

    
    };

  handleIncrement(evt) {
    console.log('Increment button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // Error: cannot read props of undefined
  }

  handleDecrement(evt) {
    console.log('Decrement button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // Error: cannot read props of undefined
  }

  render() {
    const { step } = this.props;

    return (
      <div className={css.main}>
        <span>{this.state.value}</span>

        <button
          type="button"
          className={css.button}
          onClick={this.handleIncrement}
        >
          Increment by {step}
        </button>

        <button
          type="button"
          className={css.button}
          onClick={this.handleDecrement}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}
