import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Button/Button';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * good);
  };
  const percentage = countPositiveFeedbackPercentage();

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  const total = countTotalFeedback();

  const options = Object.keys({ good, neutral, bad });
  return (
    <div>
      <Section title={'Statistics'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      {total > 0 ? (
        <Section title={'Please leave your feedback'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message={'There is no feedback'}></Notification>
      )}
    </div>
  );
};

// App extends Component {

//   onLeaveFeedback = option => {
//     this.setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     // return Object.values(this.state).reduce(
//     //   (previousValue, currentValue) => previousValue + currentValue,
//     //   0
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((100 / this.countTotalFeedback()) * this.state.good);
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);
//     return (
//       <div>
//         <Section title={'Statistics'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>

//         {total > 0 ? (
//           <Section title={'Please leave your feedback'}>
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={percentage}
//             ></Statistics>
//           </Section>
//         ) : (
//           <Notification message={'There is no feedback'}></Notification>
//         )}
//       </div>
//     );
//   }
// }
