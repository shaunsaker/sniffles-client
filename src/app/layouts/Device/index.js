import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Device from './Device';

export class DeviceContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    return <Device />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(DeviceContainer);
