import css from 'styled-jsx/css';

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
  }

  .title-text-container {
    margin-bottom: ${rhythm.vt * 2}px;
  }

  .header-row-container {
    display: flex;
    justify-content: space-between;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    background-color: ${colors.lightGrey};
    margin-bottom: ${rhythm.vt}px;
  }

  .header-item-container {
  }
`;

export default styles;
