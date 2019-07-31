import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    display: flex;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    width: 100%;
  }

  .left-text-container {
    text-align: left;
  }

  .text-container {
    flex: 1;
    margin-right: ${rhythm.hz / 2}px;
  }

  .right-text-container {
    text-align: right;
    margin-right: 0;
  }
`;

export default styles;
