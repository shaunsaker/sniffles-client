import React from 'react';
import PropTypes from 'prop-types';
import { Card, ButtonBase } from '@material-ui/core';

import styles from './styles';
import { colors } from '../../static/styles/styleConstants';

import Typography from '../Typography';

const DeviceItem = ({ macAddress, isOnline, lastSeen, handleClick }) => {
  return (
    <Card>
      <ButtonBase style={{ width: '100%' }} onClick={handleClick}>
        <div className="container">
          <div className="text-container left-text-container">
            <Typography type="paragraph" bold>
              {macAddress}
            </Typography>
          </div>

          <div className="text-container right-text-container">
            <Typography type="paragraph" color={isOnline ? colors.green : colors.red}>
              {lastSeen}
            </Typography>
          </div>
        </div>
      </ButtonBase>

      <style jsx>{styles}</style>
    </Card>
  );
};

DeviceItem.propTypes = {
  macAddress: PropTypes.string,
  isOnline: PropTypes.bool,
  dateCreated: PropTypes.string,
  lastSeen: PropTypes.string,
  handleClick: PropTypes.func,
};
DeviceItem.defaultProps = {};

export default DeviceItem;
