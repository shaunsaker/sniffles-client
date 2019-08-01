import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertObjectToArray, sortArrayOfObjectsByKey, getElapsedDays } from 'js-simple-utils';
import Router from 'next/router';

import { getDateTime } from '../../utils';

import Dashboard from './Dashboard';

import withSyncData from '../../enhancers/withSyncData';

export class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onDeviceClick = this.onDeviceClick.bind(this);
    this.syncDevices = this.syncDevices.bind(this);

    this.state = {};
  }

  static propTypes = {
    /*
     * Connect
     */
    devices: PropTypes.shape({}),

    /*
     * withSyncData
     */
    syncData: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    this.syncDevices();
  }

  onDeviceClick(device) {
    const { id } = device;

    Router.push({
      pathname: '/device',
      query: {
        id,
      },
    });
  }

  syncDevices() {
    const { syncData } = this.props;

    syncData({
      url: 'devices',
      nextActions: [
        {
          type: 'SET_DEVICES',
        },
      ],
    });
  }

  render() {
    /*
     * Convert the devices to an array
     * Map it to expected values
     * Sort it by lastSeen
     */
    const { devices } = this.props;
    const devicesArray = devices
      ? sortArrayOfObjectsByKey(
          convertObjectToArray(devices).map((item) => {
            const { id, name, macAddress, lastSeen } = item;
            const isOnline = getElapsedDays(lastSeen) <= 1;
            const lastSeenPretty = lastSeen ? getDateTime(lastSeen) : '';

            return {
              id,
              name,
              macAddress,
              isOnline,
              lastSeen: lastSeenPretty,
            };
          }),
          'lastSeen',
          true,
        )
      : [];

    return <Dashboard devices={devicesArray} handleDeviceClick={this.onDeviceClick} />;
  }
}

function mapStateToProps(state) {
  const { devices } = state;

  return { devices };
}

export default withSyncData(connect(mapStateToProps)(DashboardContainer));
