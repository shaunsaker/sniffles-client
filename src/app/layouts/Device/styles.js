import css from 'styled-jsx/css';

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
  }

  .title-text-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .heading-text-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .section-container {
    margin-bottom: ${rhythm.vt * 2}px;
    background-color: ${colors.lightGrey};
    padding: ${rhythm.vt}px ${rhythm.hz}px;
  }

  .row-container {
    display: flex;
    margin-bottom: ${rhythm.vt}px;
  }

  .label-text-container {
    flex: 2;
  }

  .value-text-container {
    flex: 8;
  }
`;

export default styles;
