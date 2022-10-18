import css from './feedback.module.css';

export const Notification = ({ message }) => {
  return (
    <span>
      <h3 className={css.notification}>{message}</h3>
    </span>
  );
};
