import { useState } from 'react';
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];  

  const updateFeedbackCount = e => {
    switch (e) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      
      default:
        return;
    }    
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }; 
    
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? (((good) / countTotalFeedback()) * 100).toFixed(0)
      : '0';
  }
  
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          updateFeedbackCount={updateFeedbackCount}
        />
      </Section>

      {countTotalFeedback()
        ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={countTotalFeedback()}
              positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )
        : (<Notification message="There is no feedback"/>)}
    </>
  );
};