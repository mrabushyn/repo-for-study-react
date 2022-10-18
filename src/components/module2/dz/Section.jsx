import css from './feedback.module.css';

export const Section = ({ title, children }) => {
  return (
    <span className={css.title}>
      <h2 className="h2">{title}</h2>
      {children}
    </span>
  );
};
