import React, { Component } from 'react';
import css from './Feedback.module.css'

export const Feedback = () => {
  return <div></div>;
};

export class Counter extends Component {
  static props = {
    step: 5,
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
    this.setState((state, props) => ({
      value: state.value + props.step
    }));
  }

  handleDecrement(evt) {
        this.setState((state, props) => ({
          value: state.value - props.step,
        }));
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
