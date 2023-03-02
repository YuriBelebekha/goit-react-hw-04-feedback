import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,  
  totalFeedback = 0,
  positiveFeedbackPercentage,
}) => {
  
  return (
    <>
      <li className={css.optionStatItem}>
        Good: {good}
      </li>
      <li className={css.optionStatItem}>
        Neutral: {neutral}
      </li>
      <li className={css.optionStatItem}>
        Bad: {bad}
      </li>
      <li className={css.optionStatItem}>
        Total feedback count: {totalFeedback}
      </li>
      <li className={css.optionStatItem}>
        Positive feedback percentage: {positiveFeedbackPercentage}%
      </li>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.string,
};