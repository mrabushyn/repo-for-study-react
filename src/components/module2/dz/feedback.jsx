import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';


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
      valueForPercentage: (
        (state.valueForGood / state.valueForTotal) *
        100
      ).toFixed(0),
    }));
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.handleIncrementForGood}
            neutral={this.handleIncrementForNeutral}
            bad={this.handleIncrementForBad}
          />
        </Section>

        <Section title="Statistics">

          {this.state.valueForTotal === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={this.state.valueForGood}
              neutral={this.state.valueForNeutral}
              bad={this.state.valueForBad}
              total={this.state.valueForTotal}
              positivePercentage={this.state.valueForPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
