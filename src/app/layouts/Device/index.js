import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertObjectToArray, sortArrayOfObjectsByKey, getElapsedDays } from 'js-simple-utils';

import { getQueryStringParams, getDateTime } from '../../utils';

import Device from './Device';

import withSyncData from '../../enhancers/withSyncData';

export class DeviceContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.onNameClick = this.onNameClick.bind(this);
    this.syncDeviceLogs = this.syncDeviceLogs.bind(this);
    this.setName = this.setName.bind(this);
    this.saveName = this.saveName.bind(this);
    this.setEditName = this.setEditName.bind(this);

    this.id = getQueryStringParams(window.location.search).id;

    const { name } = props.device;

    this.state = {
      name,
      editName: false,
    };
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

    /*
     * withSyncData
     */
    syncData: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    this.syncDeviceLogs(this.id);
  }

  onNameChange(event) {
    const { value } = event.target;

    this.setName(value);
  }

  onNameSubmit(event) {
    event.preventDefault();

    const { name } = this.state;

    this.saveName(name);
  }

  onNameClick() {
    this.setEditName(true);
  }

  syncDeviceLogs(deviceId) {
    const { syncData } = this.props;

    syncData({
      url: 'log',
      queries: {
        orderByChild: 'macAddress',
        equalTo: deviceId,
      },
      nextActions: [
        {
          type: 'SET_DEVICE_LOGS',
          payload: {
            deviceId,
          },
        },
      ],
    });
  }

  setName(name) {
    this.setState({
      name,
    });
  }

  saveName(name) {
    const { dispatch } = this.props;

    dispatch({
      type: 'updateData',
      payload: {
        url: `devices/${this.id}`,
        data: { name },
      },
    });
  }

  setEditName(editName) {
    this.setState({
      editName,
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
      ? sortArrayOfObjectsByKey(convertObjectToArray(logs), 'timeStamp').map((item) => {
          const { date, rssi } = item;
          const prettyDate = getDateTime(date);

          return {
            date: prettyDate,
            rssi,
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
    const logsWithRssi = logsArray.filter((item) => item.rssi);
    const averageRssi = logs
      ? Math.round(
          logsWithRssi.reduce((total, item) => {
            const { rssi } = item;

            return total + rssi;
          }, 0) / logsWithRssi.length,
        )
      : null;

    /*
     * Attach editNameProps if no name or name was clicked
     */
    let editNameProps;
    const { name: stateName, editName } = this.state;

    if (editName || !name) {
      editNameProps = {
        value: stateName,
        handleChange: this.onNameChange,
        handleSubmit: this.onNameSubmit,
      };
    }

    return (
      <Device
        macAddress={macAddress}
        name={name}
        isOnline={isOnline}
        dateCreated={dateCreatedPretty}
        lastSeen={lastSeenPretty}
        timesSeenToday={timesSeenToday}
        totalTimesSeen={totalTimesSeen}
        averageRssi={averageRssi}
        logs={logsArray}
        editNameProps={editNameProps}
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

export default withSyncData(connect(mapStateToProps)(DeviceContainer));
