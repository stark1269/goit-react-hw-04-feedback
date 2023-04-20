import { Component } from "react";
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }

  updateState = (feedbackName) => {
    this.setState(prevState => {
      let newState = { ...prevState }
      
      newState[feedbackName] = prevState[feedbackName] + 1

      return newState
    })
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((good / (good + neutral + bad) * 100)) || 0;
  };
  
  render() {
    return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)} updateState={this.updateState} />
      </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() === 0 ?
            <Notification message="There is no feedback" /> :
            <Statistics
            options={Object.keys(this.state)}
            statistic={this.state}
            total={this.countTotalFeedback}
            positiveFeedback={this.countPositiveFeedbackPercentage} />}
      </Section>
      </Container>
    )
  }
};