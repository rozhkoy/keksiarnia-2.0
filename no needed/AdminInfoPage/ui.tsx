import { css } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import Categories from "../AdminCategories/ui";

export const AdminInfoPage = () => {
  const infoPage = css`
    grid-column: 4/13;
    background: #ccc;
    padding: 15px;
  `;
  return (
    <div css={infoPage}>
      <Routes>
        <Route path="Categories/*" element={<Categories />} />
      </Routes>
    </div>
  );
};
