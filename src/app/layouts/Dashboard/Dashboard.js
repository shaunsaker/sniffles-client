import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import HEADERS from './headers';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

const Dashboard = () => {
  return (
    <Layout>
      <div className="container">
        <div className="title-text-container">
          <Typography type="heading">Dashboard</Typography>
        </div>

        <div className="header-row-container">
          {HEADERS.map((item) => {
            return (
              <div key={item} className="header-item-container">
                <Typography type="paragraph" bold>
                  {item}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
