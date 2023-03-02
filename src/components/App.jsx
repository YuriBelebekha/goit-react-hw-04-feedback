import React, { Component } from 'react';
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };  

  updateFeedbackCount = (state) => {
    this.setState((prevState) => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value, 0); 
    
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? (((this.state.good) / this.countTotalFeedback()) * 100).toFixed(0)
      : '0';
  }
    

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            updateFeedbackCount={this.updateFeedbackCount}
          />
        </Section>

        {this.countTotalFeedback()
          ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                totalFeedback={this.countTotalFeedback()}
                positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          )
          : (<Notification message="There is no feedback"/>)}
      </>
    );
  }
}

