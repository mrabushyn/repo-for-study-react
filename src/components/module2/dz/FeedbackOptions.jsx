import css from './feedback.module.css';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <ul className="ul">
      <button type="button" className={css.buttons} onClick={good}>
        Good
      </button>
      <button type="button" className={css.buttons} onClick={neutral}>
        Neutral
      </button>
      <button type="button" className={css.buttons} onClick={bad}>
        Bad
      </button>
    </ul>
  );
};
