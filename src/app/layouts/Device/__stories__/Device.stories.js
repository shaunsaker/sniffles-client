import React from 'react';
import { storiesOf } from '@storybook/react';

import Device from '../Device';

const macAddress = '38:f9:d3:60:05:af';

storiesOf('Layouts|Device', module).add('default', () => <Device macAddress={macAddress} />);
