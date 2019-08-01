import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertObjectToArray, sortArrayOfObjectsByKey, getElapsedDays } from 'js-simple-utils';

import { getQueryStringParams, getDateTime } from '../../utils';

import Device from './Device';

export class DeviceContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onNameClick = this.onNameClick.bind(this);
    this.syncDeviceLogs = this.syncDeviceLogs.bind(this);

    this.state = {};
  }

  static propTypes = {
    /*
     * Connect
     */
    dispatch: PropTypes.func,
    device: PropTypes.shape({
      name: PropTypes.string,
      macAddress: PropTypes.string,
      dateCreated: PropTypes.number,
      lastSeen: PropTypes.number,
    }),
    logs: PropTypes.shape({
      date: PropTypes.number,
    }),
  };

  static defaultProps = {};

  componentDidMount() {
    const { id } = getQueryStringParams(window.location.search);

    this.syncDeviceLogs(id);
  }

  onNameClick() {
    console.log('CLICK');
  }

  syncDeviceLogs(deviceId) {
    const { dispatch } = this.props;

    dispatch({
      type: 'syncData',
      payload: {
        url: 'log',
        queries: {
          orderByChild: 'macAddress',
          equalTo: deviceId,
        },
      },
      meta: {
        nextActions: [
          {
            type: 'SET_DEVICE_LOGS',
            payload: {
              deviceId,
            },
          },
        ],
      },
    });
  }

  render() {
    const { device, logs } = this.props;
    const { name, macAddress, dateCreated, lastSeen } = device;
    const isOnline = getElapsedDays(lastSeen) <= 1;
    const dateCreatedPretty = dateCreated ? getDateTime(dateCreated) : '';
    const lastSeenPretty = lastSeen ? getDateTime(lastSeen) : '';

    /*
     * Convert the logs to array
     * Sort by dateCreated
     * Map to the object we need
     */
    const logsArray = logs
      ? sortArrayOfObjectsByKey(convertObjectToArray(logs), 'date', true).map((item) => {
          const { date } = item;
          const prettyDate = getDateTime(date);

          return {
            date: prettyDate,
            timeStamp: date,
          };
        })
      : [];

    const timesSeenToday = logs
      ? logsArray.filter((item) => {
          const { timeStamp } = item;
          const elapsedDays = getElapsedDays(timeStamp);

          return elapsedDays <= 1;
        }).length
      : null;
    const totalTimesSeen = logs ? logsArray.length : null;

    return (
      <Device
        macAddress={macAddress}
        name={name}
        isOnline={isOnline}
        dateCreated={dateCreatedPretty}
        lastSeen={lastSeenPretty}
        timesSeenToday={timesSeenToday}
        totalTimesSeen={totalTimesSeen}
        logs={logsArray}
        handleNameClick={this.onNameClick}
      />
    );
  }
}

function mapStateToProps(state) {
  const { devices, deviceLogs } = state;
  const { id } = getQueryStringParams(window.location.search);
  const device = devices[id];
  const logs = deviceLogs[id];

  return {
    device,
    logs,
  };
}

export default connect(mapStateToProps)(DeviceContainer);
