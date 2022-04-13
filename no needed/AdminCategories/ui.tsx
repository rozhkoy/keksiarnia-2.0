import ButtonGroup from "../../shared/buttonGroup/ui";
import { Route, Routes } from "react-router-dom";
import List from "../list/ui";
import AddNewCategory from "../AddNewCategory/ui";
import { css } from "@emotion/react";
import EditProduct from "../EditProduct/EditProduct";
import { her } from "./model/model";

const Categories = () => {
  const categories = css`
    display: grid;
    grid-auto-rows: auto;
  `;

  return (
    <div css={categories}>
      <div>
        <h2>Category</h2>
      </div>
      <ButtonGroup
        button={[
          { buttonName: "List", buttonLink: "list" },
          { buttonName: "Add new", buttonLink: "new" },
        ]}
      />
      <Routes>
        <Route path="list" element={<List />} />
        <Route path="new" element={<AddNewCategory />} />
        <Route path="list/edit/:id" element={<EditProduct />} />
      </Routes>
      <button onClick={her}>fsdfsdf</button>
    </div>
  );
};

export default Categories;
