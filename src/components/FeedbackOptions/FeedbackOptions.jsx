import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, updateFeedbackCount  }) => {  
  return (    
    options.map(option => (
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
  options: PropTypes.array.isRequired,
  updateFeedbackCount: PropTypes.func,
}

