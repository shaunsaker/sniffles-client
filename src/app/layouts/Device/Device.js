import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase } from '@material-ui/core';

import styles from './styles';
import { colors } from '../../static/styles/styleConstants';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

const Device = ({
  macAddress,
  name,
  isOnline,
  dateCreated,
  lastSeen,
  timesSeenToday,
  totalTimesSeen,
  logs,
  handleNameClick,
}) => {
  return (
    <Layout>
      <div className="container">
        <div className="title-text-container">
          <Typography type="title" style={{ color: isOnline ? colors.green : colors.red }}>
            {macAddress}
          </Typography>
        </div>

        <div className="section-container">
          <div className="heading-text-container">
            <Typography type="heading">Details</Typography>
          </div>

          <div className="row-container">
            <div className="label-text-container">
              <Typography type="paragraph" bold>
                Name
              </Typography>
            </div>

            <div className="value-text-container">
              <ButtonBase onClick={handleNameClick}>
                <Typography type="link">{name || 'Add Device Name'}</Typography>
              </ButtonBase>
            </div>
          </div>

          <div className="row-container">
            <div className="label-text-container">
              <Typography type="paragraph" bold>
                Date Created
              </Typography>
            </div>

            <div className="value-text-container">
              <Typography type="paragraph">{dateCreated}</Typography>
            </div>
          </div>

          <div className="row-container">
            <div className="label-text-container">
              <Typography type="paragraph" bold>
                Last Seen
              </Typography>
            </div>

            <div className="value-text-container">
              <Typography type="paragraph">{lastSeen}</Typography>
            </div>
          </div>

          <div className="row-container">
            <div className="label-text-container">
              <Typography type="paragraph" bold>
                Times Seen Today
              </Typography>
            </div>

            <div className="value-text-container">
              <Typography type="paragraph">{timesSeenToday}</Typography>
            </div>
          </div>

          <div className="row-container">
            <div className="label-text-container">
              <Typography type="paragraph" bold>
                Total Times Seen
              </Typography>
            </div>

            <div className="value-text-container">
              <Typography type="paragraph">{totalTimesSeen}</Typography>
            </div>
          </div>
        </div>

        <div className="section-container">
          <div className="heading-text-container">
            <Typography type="heading">Log</Typography>
          </div>

          {logs &&
            logs.map((item) => {
              return (
                <div key={item.date} className="item-container">
                  <Typography type="paragraph">{item.date}</Typography>
                </div>
              );
            })}
        </div>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Device.propTypes = {
  macAddress: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  dateCreated: PropTypes.string,
  lastSeen: PropTypes.string,
  timesSeenToday: PropTypes.number,
  totalTimesSeen: PropTypes.number,
  logs: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
    }),
  ),
  handleNameClick: PropTypes.func,
};
Device.defaultProps = {};

export default Device;
