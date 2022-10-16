import React, { Component } from 'react';
import css from './Toggle.module.css';

export class Toggle extends Component {

  constructor() {
    super();
    this.state = { value: 0 };
    this.updateSlice = { value: 10, b: 5, d: 4 };
  }

  doing = () => {
for (let i = 0; i < 3; i += 1) {
  // Якщо переглянути стан, на всіх ітераціях буде 0
  // Тому що це синхронний код та оновлення стану ще не відбулося
  // console.log(this.state.value); // 0

  this.setState(prevState => {
    // Якщо переглянути стан, переданий callback-функції під час її виклику,
    // отримаємо актуальний стан на момент оновлення.
    console.log(prevState.value); // буде різний на кожній ітерації

    return { value: prevState.value + 1 };
  });
}
}

  show = () => this.setState({ b: 8, d: 8 });

  hide = () => this.setState({ ...this.state, ...this.updateSlice });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    console.log(this.props);
    console.log(this.state);

    return (
      <>
        <button onClick={this.doing} className={css.button}>
          Show
        </button>
        <button onClick={this.hide} className={css.button}>
          Hide
        </button>
        {isOpen && children}
      </>
    );
  }
}



export class ToggleT extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div>
        <button onClick={this.toggle} className={css.button}>
          {isOpen ? 'Hide' : 'Show'}
        </button>
        {isOpen && children}
      </div>
    );
  }
}