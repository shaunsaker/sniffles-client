import React from 'react';
import { storiesOf } from '@storybook/react';

import { getDateTime } from '../../../../utils';

import DeviceItem from '..';

const name = "Shaun's Phone";
const macAddress = '38:f9:d3:60:05:af';
const dateCreated = getDateTime(Date.now() - 3000000);
const lastSeen = getDateTime(Date.now() - 1000000);
const handleClick = console.log;

storiesOf('Components|DeviceItem', module)
  .add('default', () => (
    <DeviceItem
      name={name}
      macAddress={macAddress}
      isOnline
      dateCreated={dateCreated}
      lastSeen={lastSeen}
      handleClick={handleClick}
    />
  ))
  .add('offline', () => (
    <DeviceItem macAddress={macAddress} dateCreated={dateCreated} lastSeen={lastSeen} handleClick={handleClick} />
  ));
