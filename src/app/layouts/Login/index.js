import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from './Login';

export class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    return <Login />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(LoginContainer);
