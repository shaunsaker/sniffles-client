import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../../static/styles/styleConstants';
import HEADERS from '../headers';

import Typography from '../../../components/Typography';
import IconButton from '../../../components/IconButton';

const DeviceItem = ({ name, macAddress, isOnline, lastSeen, handleClick }) => {
  return (
    <div className="container">
      <div style={HEADERS[0].style}>
        <div className={`online-status-indicator ${isOnline ? 'online' : ''}`} />
      </div>

      <div style={HEADERS[1].style} className="text-container">
        <Typography type="paragraph" bold>
          {name}
        </Typography>
      </div>

      <div style={HEADERS[2].style} className="text-container">
        <Typography type="paragraph">{macAddress}</Typography>
      </div>

      <div style={HEADERS[3].style} className="text-container">
        <Typography type="paragraph" color={isOnline ? colors.green : colors.red}>
          {lastSeen}
        </Typography>
      </div>

      <div style={HEADERS[4].style}>
        <IconButton iconName="chevron-right" tooltip="Open" handleClick={handleClick} />
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

DeviceItem.propTypes = {
  name: PropTypes.string,
  macAddress: PropTypes.string,
  isOnline: PropTypes.bool,
  lastSeen: PropTypes.string,
  handleClick: PropTypes.func,
};
DeviceItem.defaultProps = {};

export default DeviceItem;
