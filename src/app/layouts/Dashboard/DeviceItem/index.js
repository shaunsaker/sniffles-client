import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase } from '@material-ui/core';

import styles from './styles';
import { colors } from '../../../static/styles/styleConstants';
import HEADERS from '../headers';

import Typography from '../../../components/Typography';
import Icon from '../../../components/Icon';

const DeviceItem = ({ name, macAddress, isOnline, isRecurring, lastSeen, handleClick }) => {
  const recurringIconComponent = isRecurring && <Icon name="recurring" style={{ width: '100%' }} />;

  return (
    <ButtonBase onClick={handleClick} style={{ width: '100%' }}>
      <div className="container">
        <div style={HEADERS[0].style} className="item-container">
          <div className={`online-status-indicator ${isOnline ? 'online' : ''}`} />
        </div>

        <div style={HEADERS[1].style} className="item-container">
          <Typography
            type="paragraph"
            bold
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {name}
          </Typography>
        </div>

        <div style={HEADERS[2].style} className="item-container">
          <Typography type="paragraph" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {macAddress}
          </Typography>
        </div>

        <div style={HEADERS[3].style} className="item-container">
          <Typography
            type="paragraph"
            color={isOnline ? colors.green : colors.red}
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {lastSeen}
          </Typography>
        </div>

        <div style={HEADERS[4].style} className="item-container">
          {recurringIconComponent}
        </div>
      </div>

      <style jsx>{styles}</style>
    </ButtonBase>
  );
};

DeviceItem.propTypes = {
  name: PropTypes.string,
  macAddress: PropTypes.string,
  isOnline: PropTypes.bool,
  isRecurring: PropTypes.bool,
  lastSeen: PropTypes.string,
  handleClick: PropTypes.func,
};
DeviceItem.defaultProps = {};

export default DeviceItem;
