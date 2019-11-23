import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertObjectToArray, sortArrayOfObjectsByKey, getElapsedHours } from 'js-simple-utils';

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
      lastSeen: PropTypes.number,
      isOnline: PropTypes.bool,
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
        limit: 100,
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
    const { name, macAddress, lastSeen, isOnline } = device;
    const lastSeenPretty = lastSeen ? getDateTime(lastSeen) : '';

    /*
     * Convert the logs to array
     * Sort by dateCreated
     * Map to the object we need
     */
    const logsArray = logs ? convertObjectToArray(logs) : [];
    const sortedLogs = sortArrayOfObjectsByKey(logsArray, 'date', true);
    const parsedLogs = sortedLogs.map((item) => {
      const { date: logDate, isOnline: logIsOnline, rssi, bssid } = item;
      const prettyDate = getDateTime(logDate);

      return {
        isOnline: logIsOnline,
        date: prettyDate,
        rssi,
        bssid,
      };
    });

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
        lastSeen={lastSeenPretty}
        logs={parsedLogs}
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
