import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';

import Login from './Login';

export class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.signInWithEmail = this.signInWithEmail.bind(this);

    this.state = {};
  }

  static propTypes = {
    /*
     * Connect
     */
    dispatch: PropTypes.func,
    authenticated: PropTypes.string, // uid
  };

  static defaultProps = {};

  componentDidMount() {
    /*
     * If we're authenticated, redirect
     */
    const { authenticated } = this.props;

    if (authenticated) {
      Router.push('/dashboard');
    }
  }

  componentDidUpdate(prevProps) {
    /*
     * If we just became authenticated
     * Toggle loading back and redirect to the dashboard
     */
    const { authenticated } = this.props;

    if (authenticated && !prevProps.authenticated) {
      this.setIsLoading(false);
      Router.push('/dashboard');
    }
  }

  onSubmit(form) {
    this.setIsLoading(true);
    this.signInWithEmail(form);
  }

  setIsLoading(isLoading) {
    const { dispatch } = this.props;

    dispatch({
      type: 'SET_IS_LOADING',
      payload: {
        isLoading,
      },
    });
  }

  signInWithEmail(form) {
    const { dispatch } = this.props;

    dispatch({
      type: 'signInWithEmail',
      payload: {
        ...form,
      },
    });
  }

  render() {
    return <Login formProps={{ handleSubmit: this.onSubmit }} />;
  }
}

function mapStateToProps(state) {
  const { user } = state;
  const { uid: authenticated } = user;

  return {
    authenticated,
  };
}

export default connect(mapStateToProps)(LoginContainer);
