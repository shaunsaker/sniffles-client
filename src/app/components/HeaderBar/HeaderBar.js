import React from 'react';
import { AppBar, Toolbar as ToolBar } from '@material-ui/core';
import Link from 'next/link';
import PropTypes from 'prop-types';

import muiStyles from './muiStyles';
import styles from './styles';

import Typography from '../Typography';

const HeaderBar = ({ handleSignOut }) => {
  const signOutComponent = handleSignOut && (
    <button type="button" onClick={handleSignOut} className="sign-out-button">
      <Typography type="paragraph" style={muiStyles.text}>
        Sign Out
      </Typography>

      <style jsx>{styles}</style>
    </button>
  );

  return (
    <AppBar position="fixed" style={muiStyles.wrapper}>
      <ToolBar style={muiStyles.container}>
        <Link href="/">
          <div>
            <Typography type="heading" style={muiStyles.text}>
              Sniffles
            </Typography>

            <Typography type="small" style={muiStyles.smallText}>
              Sniff Sniff
            </Typography>
          </div>
        </Link>

        {signOutComponent}
      </ToolBar>

      <style jsx>{styles}</style>
    </AppBar>
  );
};

HeaderBar.propTypes = {
  handleSignOut: PropTypes.func,
};
HeaderBar.defaultProps = {};

export default HeaderBar;
