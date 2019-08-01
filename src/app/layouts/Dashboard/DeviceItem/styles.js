import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const SIZE = rhythm.hz / 2;

const styles = css`
  .container {
    display: flex;
    align-items: center;
    padding: 0 ${rhythm.hz}px;
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
      padding: 0 ${rhythm.hz / 2}px;
    }
  }
`;

export default styles;
