import React from "react";
import {Banner} from "./Banner/Baner";
import {Container} from "../container";
import {Offer} from "./Offers/Offers";
import {Wrapp} from "../Wrapp/Wrapp";


export const Homepage = () => {
	return(
		<div>
			<Wrapp>
				<Container>
					<Banner/>
					<Offer mainText={"Cake for you"}/>
					<Offer mainText={"Cake for you"}/>
				</Container>
			</Wrapp>
		</div>
	)
}