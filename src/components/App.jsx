import { useState } from "react";
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };
  
  const updateState = (feedbackName) => {
    switch (feedbackName) {
      case 'good':
        setGood(state => state + 1)
        break;
      case 'neutral':
        setNeutral(state => state + 1)
        break;
      case 'bad':
        setBad(state => state + 1)
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (countTotalFeedback()) * 100)) || 0;
  };

  const total = countTotalFeedback();
  const keys = Object.keys(feedback);

  return (
    <Container>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={keys} updateState={updateState} />
      </Section>
      <Section title='Statistics'>
        {total === 0 ?
          <Notification message="There is no feedback" /> :
          <Statistics
            options={keys}
            statistic={feedback}
            total={total}
            positiveFeedback={countPositiveFeedbackPercentage} />}
      </Section>
    </Container>
  )
};