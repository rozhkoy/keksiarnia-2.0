import { css } from "@emotion/react";

const Sidebar = () => {
  const sidebar = css`
    grid-column: 1/4;
    background: #a5a5a5;
  `;

  return (
    <div css={sidebar}>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  );
};

export default Sidebar;
