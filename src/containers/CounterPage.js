import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';
import wrapActionCreators from '../utils/wrapActionCreators';

@connect(state => ({
  counter: state.counter
}), wrapActionCreators(CounterActions))
export default class CounterPage extends Component {
  render() {
    return (
      <Counter {...this.props} />
    );
  }
}
