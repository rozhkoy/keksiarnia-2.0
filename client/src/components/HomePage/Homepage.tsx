import React from "react";
import {Banner} from "./Banner/Baner";
import {Container} from "../container";
import {Offer} from "./Offers/Offers";
import {Wrap} from "../Wrap/Wrapp";


export const Homepage = () => {
	return(
		<div>
			<Wrap>
				<Container>
					<Banner/>
					<Offer mainText={"Cake for you"}/>
					<Offer mainText={"Cake for you"}/>
				</Container>
			</Wrap>
		</div>
	)
}