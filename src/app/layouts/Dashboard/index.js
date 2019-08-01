import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';

export class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.syncDevices = this.syncDevices.bind(this);

    this.state = {};
  }

  static propTypes = {
    /*
     * Connect
     */
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    this.syncDevices();
  }

  syncDevices() {
    const { dispatch } = this.props;

    dispatch({
      type: 'sync',
      payload: {
        url: 'devices',
      },
      meta: {
        nextActions: [
          {
            type: 'SET_DEVICES',
          },
        ],
      },
    });
  }

  render() {
    return <Dashboard />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(DashboardContainer);
