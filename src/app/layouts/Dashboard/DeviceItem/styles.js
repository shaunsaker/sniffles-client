import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const SIZE = rhythm.hz / 2;

const styles = css`
  .container {
    display: flex;
    align-items: center;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
  }

  .online-status-indicator-container {
    margin-right: ${rhythm.hz}px;
  }
  .online-status-indicator {
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE}px;
    background-color: ${colors.red};
  }
  .online {
    background-color: ${colors.green};
  }

  .text-container {
    margin-right: ${rhythm.hz}px;
  }
`;

export default styles;
