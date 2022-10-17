import { Feedback } from "./module2/goit-react-hw-02-feedback/Feedback";
import { Counter } from "./module2/goit-react-hw-02-feedback/Feedback";
import { Toggle } from './module2/Toggle/Toggle';
import { ToggleT } from './module2/Toggle/Toggle';
import { FeedbackDZ } from './module2/dz/feedback';

export const App = () => {
  return (
    <div>
      <Feedback />
      <Counter initialValue={0} step={2} />
      <Toggle />
      <ToggleT />
      <FeedbackDZ initialValue={0} step={1} initialValuePercentage={100} />
    </div>
  );
};
