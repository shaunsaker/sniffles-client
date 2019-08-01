import React from 'react';
import { storiesOf } from '@storybook/react';

import { getDateTime } from '../../../utils';

import Device from '../Device';

const macAddress = '38:f9:d3:60:05:af';
const name = "Shaun's Phone";
const dateCreated = getDateTime(Date.now() - 3000000);
const lastSeen = getDateTime(Date.now() - 100000);
const timesSeenToday = 42;
const handleNameClick = console.log;

storiesOf('Layouts|Device', module)
  .add('default', () => (
    <Device
      macAddress={macAddress}
      name={name}
      isOnline
      dateCreated={dateCreated}
      lastSeen={lastSeen}
      timesSeenToday={timesSeenToday}
      handleNameClick={handleNameClick}
    />
  ))
  .add('with no name', () => (
    <Device
      macAddress={macAddress}
      isOnline
      dateCreated={dateCreated}
      lastSeen={lastSeen}
      timesSeenToday={timesSeenToday}
      handleNameClick={handleNameClick}
    />
  ));
