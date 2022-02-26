import ButtonGroup from "../../common/buttonGroup/ButtonGroup";
import {Route, Routes} from "react-router-dom";
import List from "./list/List";
import AddNewCategory from "./addNewCategory/AddNewCategory";
import {css} from "@emotion/react"
import EditProduct from "./editProduct/EditProduct";

const Categories = () => {
	const categories = css`
	  display: grid;
	  grid-auto-rows: auto
	`

	return(
		<div css={categories}>
			<div>
				<h2>Category</h2>
			</div>
			<ButtonGroup button={[{buttonName: "List", buttonLink: "list"}, {buttonName: "Add new", buttonLink: "new"}]}/>
			<Routes>
				<Route path="list" element={<List/>}/>
				<Route path="new" element={<AddNewCategory/>}/>
				<Route path="list/edit/:id" element={<EditProduct/>}/>
			</Routes>
		</div>
	)
}

export default Categories