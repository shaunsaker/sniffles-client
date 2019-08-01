import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';

import HeaderBar from './HeaderBar';

export class HeaderBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSignOut = this.onSignOut.bind(this);
    this.signOut = this.signOut.bind(this);

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

  onSignOut() {
    this.signOut();

    /*
     * NOTE: It's important that this redirect happens after sign out
     * So that the componentDidMount in Login does not redirect "here"
     */
    setTimeout(() => {
      Router.replace('/login');
    }, 500);
  }

  signOut() {
    const { dispatch } = this.props;

    dispatch({
      type: 'signOut',
    });
  }

  render() {
    const { authenticated } = this.props;
    const handleSignOut = authenticated ? this.onSignOut : null;

    return <HeaderBar handleSignOut={handleSignOut} />;
  }
}

function mapStateToProps(state) {
  const { user } = state;
  const { uid: authenticated } = user;

  return {
    authenticated,
  };
}

export default connect(mapStateToProps)(HeaderBarContainer);
