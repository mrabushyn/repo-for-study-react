import { Feedback } from "./module2/goit-react-hw-02-feedback/Feedback";
import { Counter } from "./module2/goit-react-hw-02-feedback/Feedback";
import { Toggle } from './module2/Toggle/Toggle';
import { ToggleT } from './module2/Toggle/Toggle';
import { FeedbackDZ } from './module2/dz/feedback';
// import { FormLessonClass } from './module2/Form-lesson/Form-lessonClass';
import { FormLessonComponent } from './module2/Form-lesson/Form-lesson-component';
import { LoginForm } from './module2/Form-lesson/Form-lessonClass';
import { SignUpForm } from './module2/Form-lesson/Form-lessonClass';
import { SignUpFormHard } from './module2/Form-lesson/Form-less-hard';
import { Form } from './module2/Form-lesson/Form-less-hard';
import { SignUpFormCheckBox } from './module2/Form-lesson/Form-less-hard';
import { SignUpFormRadio } from './module2/Form-lesson/Form-less-hard';
import { SignUpFormSelect } from './module2/Form-lesson/Form-less-hard';


export const App = () => {
  return (
    <div>
      <Feedback />
      <Counter initialValue={0} step={2} />
      <Toggle />
      <ToggleT />
      <FeedbackDZ initialValue={0} step={1} initialValuePercentage={100} />
      {/* <FormLessonClass step={1} /> */}
      <FormLessonComponent step={1} />
      <LoginForm onSubmit={values => console.log(values)} />
      <SignUpForm onSubmit={values => console.log(values)} />,
      <SignUpFormHard onSubmit={values => console.log(values)} />,
      <Form onSubmit={values => console.log(values)} />,
      <SignUpFormCheckBox onSubmit={values => console.log(values)} />,
      <SignUpFormRadio onSubmit={values => console.log(values)} />,
      <SignUpFormSelect onSubmit={values => console.log(values)} />,
    </div>
  );
};
