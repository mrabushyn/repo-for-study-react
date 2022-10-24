import React, { Component } from 'react';
import css from './FormStyle.module.css';

// export class FormLessonClass extends Component {
//   static props = {
//     step: 1,
//   };
//   render(props) {
//     return <div>FORM</div>;
//   }
// }

export class LoginForm extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
    console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    this.props.onSubmit({ login, password, form });
        console.log(login, password, form);
        console.log('asdasdasdasdas');
    form.reset();
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className={css.inputField} type="text" name="login" />
          <input className={css.inputField} type="password" name="password" />
          <button className={css.submitBtn} type="submit">
            Login
          </button>
        </form>

        <input
          className={css.inputField}
          type="text"
          value={inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

export class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  // Відповідає за оновлення стану
  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  // Викликається під час відправлення форми
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);

    // Проп, який передається формі для виклику під час сабміту
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={css.inputField}
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">{login === '' ? 'Sign up as' : login}</button>
      </form>
    );
  }
}
