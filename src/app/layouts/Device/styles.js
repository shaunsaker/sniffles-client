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
    padding-bottom: ${rhythm.vt}px;
    border-bottom: 1px solid ${colors.lightGrey};
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

  .item-container {
    margin-bottom: ${rhythm.vt}px;
  }
`;

export default styles;
