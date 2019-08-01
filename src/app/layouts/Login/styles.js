import css from 'styled-jsx/css';

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    background-color: ${colors.lightGrey};
    padding: ${rhythm.vt * 2}px ${rhythm.hz}px;
  }

  .title-text-container {
    margin-bottom: ${rhythm.vt * 2}px;
  }
`;

export default styles;
