import { Container } from "../../shared/ui/container";
import "./style.scss";
import { useState } from "react";
import { useQuery } from "react-query";
import { createImgLink } from "../../shared/lib/createImgLink";
import { Link } from "react-router-dom";
import { getAllCategories } from "src/features/AddNewSubcategory/api";
import { ICategoryResponse } from "src/features/ListCategories/types";
import { SkeletonItem } from "../../shared/SkeletonUi/SkeletonItem";

export const Catalog = () => {
	const [categories, setCategories] = useState<ICategoryResponse[]>([]);
	const categoriesQuery = useQuery("getAllCategories", getAllCategories, {
		onSuccess: ({ data }) => {
			setCategories(data);
		}
	});

	return (
		<div className={"catalog"}>
			<Container>
				<h1 className="catalog__title">Catalog</h1>
				<div className="catalog__container">
					{categoriesQuery.isSuccess ?
						(
							categories.map((item) => {
								const imgLink = createImgLink(item.categoryPicture.name);
								return (
									<Link key={item.categoryPicture.name} to={item.title.toLowerCase()}
									      className={"link"}>
										<div className="catalog__item">
											<img src={imgLink} alt="" className="catalog__item-img" />
											<div className="catalog__item-title-background">
												<h2 className="catalog__item-title">{item.title}</h2>
											</div>
										</div>
									</Link>
								);
							})
						) : (
							<>
								<SkeletonItem type={"catalog"} />
								<SkeletonItem type={"catalog"} />
							</>
						)
					}
				</div>
			</Container>
		</div>
	);
};
