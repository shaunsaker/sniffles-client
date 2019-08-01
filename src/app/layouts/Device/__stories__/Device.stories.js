import React from 'react';
import { storiesOf } from '@storybook/react';

import { getDateTime } from '../../../utils';

import Device from '../Device';

const macAddress = '38:f9:d3:60:05:af';
const name = "Shaun's Phone";
const dateCreated = getDateTime(Date.now() - 3000000);
const lastSeen = getDateTime(Date.now() - 100000);
const timesSeenToday = 42;
const totalTimesSeen = 160;
const logs = [
  {
    date: getDateTime(Date.now() - 2000000),
  },
  {
    date: getDateTime(Date.now() - 3000000),
  },
  {
    date: getDateTime(Date.now() - 9000000),
  },
  {
    date: getDateTime(Date.now() - 50000000),
  },
];
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
      totalTimesSeen={totalTimesSeen}
      logs={logs}
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
      totalTimesSeen={totalTimesSeen}
      logs={logs}
      handleNameClick={handleNameClick}
    />
  ));
