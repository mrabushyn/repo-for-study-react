import React, { Component } from 'react';
// import css from './feedback.module.css';

export class FeedbackDZ extends Component {
  static props = {
    step: 1,
    initialValue: 0,
    initialValuePercentage: 100,
  };

  constructor(props) {
    super(props);
    this.handleIncrementForGood = this.handleIncrementForGood.bind(this);
    this.handleIncrementForNeutral = this.handleIncrementForNeutral.bind(this);
    this.handleIncrementForBad = this.handleIncrementForBad.bind(this);
    this.state = {
      valueForGood: this.props.initialValue,
      valueForNeutral: this.props.initialValue,
      valueForBad: this.props.initialValue,
      valueForTotal: this.props.initialValue,
      valueForPercentage: this.props.initialValuePercentage,
    };
  }

  handleIncrementForGood() {
    this.setState((state, props) => ({
      valueForGood: state.valueForGood + props.step,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }
  handleIncrementForNeutral() {
    this.setState((state, props) => ({
      valueForNeutral: state.valueForNeutral + props.step,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }
  handleIncrementForBad() {
    this.setState((state, props) => ({
      valueForBad: state.valueForBad + props.step,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  countTotalFeedback() {
    this.setState(state => ({
      valueForTotal:
        state.valueForGood + state.valueForNeutral + state.valueForBad,
    }));
  }

  countPositiveFeedbackPercentage() {
    this.setState(state => ({
      valueForPercentage: (state.valueForGood / state.valueForTotal) * 100,
    }));
  }

  render() {
    return (
      <div className="div">
        <h2 className="h2">Please leave feedback</h2>

        <ul className="ul">
          <button
            type="button"
            className="button"
            onClick={this.handleIncrementForGood}
          >
            Good
          </button>
          <button
            type="button"
            className="button"
            onClick={this.handleIncrementForNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className="button"
            onClick={this.handleIncrementForBad}
          >
            Bad
          </button>
        </ul>

        <h2 className="h2">Statistics</h2>
        <ul className="ul">
          <li className="li">
            Good:
            <span>{this.state.valueForGood}</span>
          </li>
          <li className="li">
            Neutral:<span>{this.state.valueForNeutral}</span>
          </li>
          <li className="li">
            Bad:<span>{this.state.valueForBad}</span>
          </li>
          <li className="li">
            Total:<span>{this.state.valueForTotal}</span>
          </li>
          <li className="li">
            Positive feedback:<span>{this.state.valueForPercentage}%</span>
          </li>
        </ul>
      </div>
    );
  }
}
