import css from 'styled-jsx/css';

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
  }

  .title-text-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .header-row-container {
    display: flex;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    background-color: ${colors.lightGrey};
    margin-bottom: ${rhythm.vt}px;
  }

  .header-item-container {
  }

  .items-container {
    overflow: scroll-y;
  }

  .item-container {
  }

  @media (max-width: 768px) {
    .header-row-container {
      padding: ${rhythm.vt}px ${rhythm.hz / 2}px;
    }
  }
`;

export default styles;
