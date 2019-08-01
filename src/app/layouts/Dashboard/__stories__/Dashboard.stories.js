import React from 'react';
import { storiesOf } from '@storybook/react';

import { getDateTime } from '../../../utils';

import Dashboard from '../Dashboard';

const devices = [
  {
    name: "Shaun's Phone",
    macAddress: '38:f9:d3:60:05:af',
    dateCreated: getDateTime(Date.now() - 3000000),
    lastSeen: getDateTime(Date.now() - 100000),
    isOnline: true,
    id: '1',
  },
  {
    name: "Shaun's Macbook Pro",
    macAddress: 'ab:f9:d3:60:05:af',
    dateCreated: getDateTime(Date.now() - 9000000),
    lastSeen: getDateTime(Date.now() - 1000000),
    id: '2',
  },
];
const handleDeviceClick = console.log;

storiesOf('Layouts|Dashboard', module).add('default', () => (
  <Dashboard devices={devices} handleDeviceClick={handleDeviceClick} />
));
