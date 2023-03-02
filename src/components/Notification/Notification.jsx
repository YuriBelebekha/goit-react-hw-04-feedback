import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={css.notificationSection}>
      {message && <b>{message}</b>}      
    </div>
  )
};

export default Notification;

Notification.propTypes = {
  title: PropTypes.string,  
}