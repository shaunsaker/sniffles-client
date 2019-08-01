import css from 'styled-jsx/css';

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    flex: 1;
  }

  .title-text-container {
    margin-bottom: ${rhythm.vt * 2}px;
  }

  .header-row-container {
    display: flex;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    background-color: ${colors.lightGrey};
  }

  .header-item-container {
    text-align: left;
  }

  .items-container {
    overflow-y: scroll;
  }

  .item-container {
  }

  .odd-item-container {
    background-color: ${colors.lightGrey};
  }

  @media (max-width: 768px) {
    .header-row-container {
      padding: ${rhythm.vt}px ${rhythm.hz / 2}px;
    }
  }
`;

export default styles;
