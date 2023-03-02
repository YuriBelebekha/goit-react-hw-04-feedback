import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, updateFeedbackCount  }) => {  
  const stateArrayKeys = Object.keys(options);
  // console.log(options)
  return (    
    stateArrayKeys.map(option => (
      <li className={css.optionsListItem} key={option}>
        <button          
          type="button"          
          name={option}
          onClick={() => updateFeedbackCount(option)}
        >
          {option}
        </button>  
      </li>
    ))
  )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  updateFeedbackCount: PropTypes.func,
}

