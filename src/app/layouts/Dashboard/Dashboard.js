import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import HEADERS from './headers';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';
import DeviceItem from './DeviceItem';

const Dashboard = ({ knownDevices, unknownDevices, handleDeviceClick }) => {
  return (
    <Layout>
      <div className="container">
        <div className="title-text-container">
          <Typography type="title">Devices</Typography>
        </div>

        <div className="header-row-container">
          {HEADERS.map((item, index) => {
            const { name, style } = item;

            return (
              <div key={name || index} style={style} className="header-item-container">
                <Typography type="paragraph" bold>
                  {name}
                </Typography>
              </div>
            );
          })}
        </div>

        <div className="heading-text-container">
          <Typography type="heading">Known Devices</Typography>
        </div>

        <div className="items-container">
          {knownDevices &&
            knownDevices.map((item, index) => {
              const isOdd = index % 2 !== 0;

              return (
                <div key={item.id} className={`item-container ${isOdd ? 'odd-item-container' : ''}`}>
                  <DeviceItem {...item} handleClick={() => handleDeviceClick(item)} />
                </div>
              );
            })}
        </div>

        <div className="heading-text-container">
          <Typography type="heading">Unknown Devices</Typography>
        </div>

        <div className="items-container">
          {unknownDevices &&
            unknownDevices.map((item, index) => {
              const isOdd = index % 2 !== 0;

              return (
                <div key={item.id} className={`item-container ${isOdd ? 'odd-item-container' : ''}`}>
                  <DeviceItem {...item} handleClick={() => handleDeviceClick(item)} />
                </div>
              );
            })}
        </div>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Dashboard.propTypes = {
  knownDevices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  unknownDevices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  handleDeviceClick: PropTypes.func,
};
Dashboard.defaultProps = {};

export default Dashboard;
