import { rhythm } from '../../static/styles/styleConstants';

/*
 * Use these to keep the table styles consistent between the
 * Header row and the DeviceItems
 */
const headers = [
  { name: '', style: { minWidth: '5%' } },
  { name: 'Name', style: { minWidth: '20%', textAlign: 'left', marginRight: rhythm.hz / 2 } },
  { name: 'Mac Address', style: { minWidth: '20%', marginRight: rhythm.hz / 2 } },
  { name: 'Last Seen', style: { minWidth: '50%', marginRight: rhythm.hz / 2 } },
  { name: '', style: { minWidth: '5%' } },
];

export default headers;
