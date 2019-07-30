import React from 'react';
import { AppBar, Toolbar as ToolBar } from '@material-ui/core';
import Link from 'next/link';

import muiStyles from './muiStyles';
import styles from './styles';

import Typography from '../Typography';

const HeaderBar = () => {
  return (
    <AppBar position="fixed" style={muiStyles.wrapper}>
      <ToolBar style={muiStyles.container}>
        <Link href="/">
          <div>
            <Typography type="heading" style={muiStyles.headingText}>
              Sniffles
            </Typography>

            <Typography type="small" style={muiStyles.text}>
              Sniff Sniff
            </Typography>
          </div>
        </Link>
      </ToolBar>

      <style jsx>{styles}</style>
    </AppBar>
  );
};

HeaderBar.propTypes = {};
HeaderBar.defaultProps = {};

export default HeaderBar;
