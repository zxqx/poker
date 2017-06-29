import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';
import styles from '../style/counter.scss';

@cssModules(styles)
export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    styles: PropTypes.object
  };

  render() {
    const { counter, increment, decrement, incrementAsync, styles } = this.props;

    return (
      <p>
        <span className={styles.counter}>Counter: {counter}</span>
        <button className={styles.button} onClick={() => increment()}>+</button>
        <button className={styles.button} onClick={() => decrement()}>-</button>
        <button className={styles.button} onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}
