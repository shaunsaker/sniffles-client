import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertObjectToArray, sortArrayOfObjectsByKey } from 'js-simple-utils';
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
    const devicesArray =
      devices &&
      sortArrayOfObjectsByKey(convertObjectToArray(devices), 'timestamp', true).map((item) => {
        const { id, name, macAddress, date } = item;
        const now = Date.now();
        const difference = now - date;
        const isOnline = difference / 1000 / 60 <= 10; // last 10 min
        const lastSeenPretty = date ? getDateTime(date) : '';

        return {
          id,
          name,
          macAddress,
          isOnline,
          lastSeen: lastSeenPretty,
          timestamp: date,
        };
      });
    const knownDevices = devices && devicesArray.filter((item) => item.name);
    const unknownDevices = devices && devicesArray.filter((item) => !item.name);

    return (
      <Dashboard knownDevices={knownDevices} unknownDevices={unknownDevices} handleDeviceClick={this.onDeviceClick} />
    );
  }
}

function mapStateToProps(state) {
  const { devices } = state;

  return { devices };
}

export default withSyncData(connect(mapStateToProps)(DashboardContainer));
