import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const SIZE = rhythm.hz / 2;

const styles = css`
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
  }

  .item-container {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

  @media (max-width: 768px) {
    .container {
      padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
    }
  }
`;

export default styles;
