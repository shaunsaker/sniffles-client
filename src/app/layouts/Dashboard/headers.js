import { rhythm } from '../../static/styles/styleConstants';

/*
 * Use these to keep the table styles consistent between the
 * Header row and the DeviceItems
 */
const headers = [
  { name: '', style: { flex: 1, marginRight: rhythm.hz / 2 } },
  { name: 'Name', style: { flex: 4, marginRight: rhythm.hz / 2 } },
  { name: 'Mac Address', style: { flex: 4, marginRight: rhythm.hz / 2 } },
  { name: 'Last Seen', style: { flex: 8, marginRight: rhythm.hz / 2 } },
  { name: '', style: { flex: 1 } },
];

export default headers;
