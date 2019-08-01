import css from 'styled-jsx/css';

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    flex: 1;
  }

  .title-text-container {
    margin-bottom: ${rhythm.vt * 2}px;
  }

  .heading-text-container {
    padding: ${rhythm.vt}px 0;
  }

  .header-row-container {
    display: flex;
    padding-bottom: ${rhythm.vt}px;
  }

  .header-item-container {
    text-align: left;
  }

  .section-container {
    margin-bottom: ${rhythm.vt * 2}px;
    background-color: ${colors.lightGrey};
    padding: 0 ${rhythm.hz}px;
  }

  .row-container {
    display: flex;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    margin: 0 -${rhythm.hz}px;
  }

  .odd-row-container {
    background-color: white;
  }

  .label-text-container {
    flex: 2;
    margin-right: ${rhythm.hz / 2}px;
  }

  .value-text-container {
    flex: 8;
  }

  .item-container {
  }
`;

export default styles;
