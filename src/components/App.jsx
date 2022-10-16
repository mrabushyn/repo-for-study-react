import { Feedback } from "./module2/goit-react-hw-02-feedback/Feedback";
import { Counter } from "./module2/goit-react-hw-02-feedback/Feedback";
import { Toggle } from './module2/Toggle/Toggle';


export const App = () => {
  return (
    <div>
      <Feedback />
      <Counter initialValue={20} />
      <Toggle/>
    </div>
  );
};
