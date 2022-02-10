import {Wrap} from "../Wrap/Wrapp";
import {Container} from "../container";
import {FilterItemCheckbox} from "../FilterItem/FilterItemCheckbox";
import {CatalogItem} from "../CatalogItem/CatalogItem";
import {css} from "@emotion/react"
import {fetchAllProduct, fetchOnlyOneCategory, productItemALL, setCurrentPath} from "../../store/setCatalogData";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../app/hooks";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import * as path from "path";



export  const CatalogOfOneCategory = () => {
	const [queryStatus, setQueryStatus] = useState<boolean>(false)
	const catalogItems = useAppSelector((state => state.catalog))

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

	let {pathname} = useLocation()

	function fetchProduct() {
		console.log(pathname);
		dispatch(fetchOnlyOneCategory(pathname.split("/").join("")))
	}

	useEffect(() => {
		fetchProduct()


	}, [ pathname])


	const dispatch = useDispatch()
	return(
		<Wrap>
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
									<CatalogItem img={item.img} name={item.name} price={item.price}  key={item.id}/>
								)
							)
						}
					</div>
				</div>
				<button onClick={() => fetchProduct()}>test</button>
			</Container>
		</Wrap>
	)
}