import {Wrapp} from "../Wrapp/Wrapp";
import {Container} from "../container";
import {FilterItemCheckbox} from "../FilterItem/FilterItemCheckbox";
import {CatalogItem} from "../CatalogItem/CatalogItem";
import {css} from "@emotion/react"
import {fetchAllProduct, productItemALL} from "../../store/setCatalogDate";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../app/hooks";
import {useLocation} from "react-router-dom";


export  const Catalog = () => {

	const catalogItems = useAppSelector((state => state.catalog))
	console.log(catalogItems)
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
	  align-items: start;
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
							{
								catalogItems.arrayProduct.map((item: productItemALL) =>(
										<CatalogItem img={process.env.REACT_APP_API_URL + item.img} name={item.name} price={item.price}  key={item.id}/>
									)
								)
							}

						</div>
					</div>
					<button onClick={() => {dispatch(fetchAllProduct())}}>test</button>
				</Container>
			</Wrapp>
	)
}