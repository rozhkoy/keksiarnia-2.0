import {Wrapp} from "../Wrapp/Wrapp";
import {Container} from "../container";
import {FilterItemCheckbox} from "../FilterItem/FilterItemCheckbox";
import {CatalogItem} from "../CatalogItem/CatalogItem";
import {css} from "@emotion/react"
import {fetchAllProduct} from "../../store/setCatalogDate";
import {useDispatch} from "react-redux";

export  const Catalog = () => {

	const catalog = css`
		display: grid;
    	grid-template-columns: repeat(12, 1fr);
	  	grid-gap: 15px;
	`

	const catalogGrid = css`
	  grid-column: 4/13;
	  display: grid;
	  grid-template-columns: repeat(3, 1fr);
	  grid-gap: 15px;
	`

	const catalogFilter = css`
		grid-column: 1/4;
	`

	const filterGroup = css`
	  display: grid;
	  grid-template-columns: 1fr;
	  grid-auto-rows: auto;
	  justify-content: start;
	  padding: 20px 10px;
	  background: #fff;
	  
	`

	const dispatch = useDispatch()
	return(
			<Wrapp>
				<Container>
					<div css={catalog}>
						<div css={catalogFilter}>
							<div css={filterGroup}>
								<FilterItemCheckbox text={"cake"}/>
								<FilterItemCheckbox text={"dfsdfsdf"}/>
								<FilterItemCheckbox text={"casdfsdfke"}/>
								<FilterItemCheckbox text={"sdfsdfsdf"}/>
								<FilterItemCheckbox text={"sdfdsfsdf"}/>
							</div>

							<div css={filterGroup}>
								<FilterItemCheckbox text={"cake"}/>
								<FilterItemCheckbox text={"dfsdfsdf"}/>
								<FilterItemCheckbox text={"casdfsdfke"}/>
								<FilterItemCheckbox text={"sdfsdfsdf"}/>
								<FilterItemCheckbox text={"sdfdsfsdf"}/>
							</div>

							<div css={filterGroup}>
								<FilterItemCheckbox text={"cake"}/>
								<FilterItemCheckbox text={"dfsdfsdf"}/>
								<FilterItemCheckbox text={"casdfsdfke"}/>
								<FilterItemCheckbox text={"sdfsdfsdf"}/>
								<FilterItemCheckbox text={"sdfdsfsdf"}/>
							</div>
						</div>
						<div css={catalogGrid}>
							<button onClick={() => {dispatch(fetchAllProduct())}}>test</button>
						</div>
					</div>
				</Container>
			</Wrapp>
	)
}