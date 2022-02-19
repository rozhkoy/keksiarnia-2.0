import {css} from "@emotion/react";
import {Route, Routes} from "react-router-dom";
import Categories from "./components/pages/categories/Categories";
import Sideba from "./Sideba";
import Admin from "./Admin";

const InfoPages = () => {

	const infoPage = css`
		grid-column: 4/13;
	  	background: #ccc;
    	padding: 15px;
	`
	return(
		<div css={infoPage}>
			<Routes>
				<Route path="Categories/*" element={<Categories/>} />
			</Routes>
		</div>
	)
}

// @ts-ignore
export default InfoPages