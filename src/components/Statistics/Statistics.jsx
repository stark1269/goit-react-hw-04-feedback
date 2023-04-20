import PropTypes from 'prop-types';

export const Statistics = ({ options, statistic, total, positiveFeedback }) => {
  return (
    <>
      {options.map((item, i) => {
        return (
          <p key={i}>{item}: {statistic[item]}</p>
        )
      })}
      <p>Total: {total()}</p>
      <p>Positive feedback: {positiveFeedback()}%</p>
    </>
  )
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.func.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};