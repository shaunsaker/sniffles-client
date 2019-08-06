import React from 'react';
import { Autorenew, KeyboardArrowRight } from '@material-ui/icons';

const icons = {
  recurring: (props) => <Autorenew {...props} />,
  'chevron-right': (props) => <KeyboardArrowRight {...props} />,
};

export default icons;
