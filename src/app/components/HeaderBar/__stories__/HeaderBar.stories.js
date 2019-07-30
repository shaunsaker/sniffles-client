import React from 'react';
import { storiesOf } from '@storybook/react';

import HeaderBar from '../HeaderBar';

storiesOf('Components|HeaderBar', module)
  .add('default', () => <HeaderBar />)
  .add('with Sign Out', () => <HeaderBar handleSignOut />);
