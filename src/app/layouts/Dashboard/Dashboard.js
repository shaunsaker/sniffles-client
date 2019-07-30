import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

const Dashboard = () => {
  return (
    <Layout>
      <div className="container">
        <div className="title-text-container">
          <Typography type="heading">Dashboard</Typography>
        </div>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
