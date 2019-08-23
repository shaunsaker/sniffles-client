/*
 * Use these to keep the table styles consistent between the
 * Header row and the DeviceItems
 */
import { rhythm } from '../../static/styles/styleConstants';

const headers = [
  {
    name: 'Status',
    style: { flex: 2, marginRight: rhythm.hz / 2 },
  },
  {
    name: 'Date',
    style: { flex: 8, marginRight: rhythm.hz / 2 },
  },
  {
    name: 'BSSID',
    style: { flex: 4, marginRight: rhythm.hz / 2 },
  },
  {
    name: 'RSSI',
    style: { flex: 2 },
  },
];

export default headers;
