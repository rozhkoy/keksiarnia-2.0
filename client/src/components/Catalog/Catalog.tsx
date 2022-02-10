import {Wrap} from "../Wrap/Wrapp";
import {Container} from "../container";
import {FilterItemCheckbox} from "../FilterItem/FilterItemCheckbox";
import {CatalogItem} from "../CatalogItem/CatalogItem";
import {css} from "@emotion/react"
import {fetchAllProduct, productItemALL} from "../../store/setCatalogData";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../app/hooks";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


export  const Catalog = () => {

	const catalogItems = useAppSelector((state => state.catalog))
	console.log(catalogItems)
	const catalog = css`
		display: grid;
    	grid-template-columns: repeat(12, 1fr);
	  	grid-gap: 15px;
	`

	const catalogGrid = css`
	  grid-column: 1/13;
	  display: grid;
	  grid-template-columns: repeat(4, 1fr);
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
		dispatch(fetchAllProduct())
	}

	useEffect(() => {
		fetchProduct()


	}, [ pathname])


	const dispatch = useDispatch()
	return(
		<Wrap>
			<Container>
				<div css={catalog}>
					<div css={catalogGrid}>
						{
							catalogItems.arrayProduct.map((item: productItemALL) =>(
									<CatalogItem img={item.img} name={item.name} price={item.price}  key={item.id}/>
								)
							)
						}
					</div>
				</div>
			</Container>
		</Wrap>
	)
}