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
    style: { flex: 8 },
  },
];

export default headers;
