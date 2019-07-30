import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderBar from './HeaderBar';

export class HeaderBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    return <HeaderBar />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(HeaderBarContainer);
