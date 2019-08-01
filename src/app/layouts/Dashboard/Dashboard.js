import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import HEADERS from './headers';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';
import DeviceItem from './DeviceItem';

const Dashboard = ({ devices, handleDeviceClick }) => {
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

        <div className="items-container">
          {devices &&
            devices.map((item) => {
              return (
                <div key={item.id} className="item-container">
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
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  handleDeviceClick: PropTypes.func,
};
Dashboard.defaultProps = {};

export default Dashboard;
