import React, { Component } from 'react';
import css from './FormStyle.module.css';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

export class SignUpFormHard extends Component {
  state = { ...INITIAL_STATE };

  // Для всіх інпутів створюємо один обробник
  // Розрізняти інпути будемо за атрибутом name
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log(evt.target);

    console.log({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={css.inputField}
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            className={css.inputField}
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Password
          <input
            className={css.inputField}
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}





export class Form extends React.Component {
  loginInputId = nanoid();
  
  render() {
    console.log(this.loginInputId);
    return (
      <form>
        <label htmlFor={this.loginInputId}>Login</label>
        <input type="text" name="login" id={this.loginInputId} />
      </form>
    );
  }
}


// _____________________________________CHECKBOX__________________________________


const INITIAL_STATEE = {
  login: '',
  email: '',
  password: '',
  agreed: true,
};


export class SignUpFormCheckBox extends Component {
  state = {
    ...INITIAL_STATEE,
  };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    // Якщо тип елемента – checkbox, беремо значення checked,
    // в іншому випадку – value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );

    /* ... */
  };

  render() {
    const { 
      login, 
      // email, 
      // password, 
      agreed 
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {/* ... */}
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}