import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';
import Header from '../components/Header';
import styles from '../style/index.scss';

@cssModules(styles)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    styles: PropTypes.object
  };

  render() {
    const { children, styles } = this.props;

    return (
      <div className={styles.container}>
        <Header />

        {children}
      </div>
    );
  }
}
