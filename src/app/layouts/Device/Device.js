import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase, TextField } from '@material-ui/core';

import styles from './styles';
import { colors } from '../../static/styles/styleConstants';
import HEADERS from './headers';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

const Device = ({ macAddress, name, isOnline, lastSeen, logs, editNameProps, handleNameClick }) => {
  const nameComponent = editNameProps ? (
    <form onSubmit={editNameProps.handleSubmit} className="editing-name-container">
      <TextField
        type="text"
        name="name"
        placeholder="Add Device Name"
        value={editNameProps.value}
        onChange={editNameProps.handleChange}
        style={{ marginTop: -6 }}
        inputProps={{ style: { fontSize: 14 } }}
      />
    </form>
  ) : (
    <ButtonBase onClick={handleNameClick}>
      <Typography type="link">{name}</Typography>
    </ButtonBase>
  );

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

          <div className="row-container odd-row-container">
            <div className="label-text-container">
              <Typography type="paragraph" bold>
                Name
              </Typography>
            </div>

            <div className="value-text-container">{nameComponent}</div>
          </div>

          <div className="row-container odd-row-container">
            <div className="label-text-container">
              <Typography type="paragraph" bold>
                Last Seen
              </Typography>
            </div>

            <div className="value-text-container">
              <Typography type="paragraph">{lastSeen}</Typography>
            </div>
          </div>
        </div>

        <div className="section-container">
          <div className="heading-text-container">
            <Typography type="heading">Logs</Typography>
          </div>

          <div className="header-row-container">
            {HEADERS.map((item, index) => {
              const { name: headerName, style } = item;

              return (
                <div key={headerName || index} style={style} className="header-item-container">
                  <Typography type="paragraph" bold>
                    {headerName}
                  </Typography>
                </div>
              );
            })}
          </div>

          {logs &&
            logs.map((item, index) => {
              const isOdd = index % 2 === 0;
              const { isOnline: logIsOnline, date: logDate, bssid, rssi } = item;

              return (
                <div key={logDate} className={`row-container ${isOdd ? 'odd-row-container' : ''}`}>
                  <div style={HEADERS[0].style} className="item-container">
                    <div className={`online-status-indicator ${logIsOnline ? 'online' : ''}`} />
                  </div>

                  <div style={HEADERS[1].style} className="item-container">
                    <Typography type="paragraph">{logDate}</Typography>
                  </div>

                  <div style={HEADERS[2].style} className="item-container">
                    <Typography type="paragraph">{bssid}</Typography>
                  </div>

                  <div style={HEADERS[3].style} className="item-container">
                    <Typography type="paragraph">{rssi}</Typography>
                  </div>
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
  lastSeen: PropTypes.string,
  logs: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      rssi: PropTypes.number,
    }),
  ),
  editNameProps: PropTypes.shape({
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  }),
  handleNameClick: PropTypes.func,
};
Device.defaultProps = {};

export default Device;
