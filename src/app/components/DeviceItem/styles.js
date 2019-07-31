import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    display: flex;
    justify-content: space-between;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    width: 100%;
  }
`;

export default styles;
