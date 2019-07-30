import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import FIELDS from './fields';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';
import Form from '../../components/Form';

const Login = ({ formProps }) => {
  return (
    <Layout>
      <div className="container">
        <div className="title-text-container">
          <Typography type="title">Login</Typography>
        </div>

        <div className="form-container">
          <Form fields={FIELDS} {...formProps} />
        </div>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Login.propTypes = {
  formProps: PropTypes.shape({}),
};
Login.defaultProps = {};

export default Login;
