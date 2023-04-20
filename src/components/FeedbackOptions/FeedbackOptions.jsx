import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, updateState }) => {
  return (
    options.map((item, i) => {
      return (
        <Button key={i} onClick={() => updateState(item)} type="button">{item}</Button>
      )
    })
  )
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
  updateState: PropTypes.func.isRequired,
};