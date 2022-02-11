import {useState} from "react";

export const  FilterItemInputRange = () => {
	const [minValue, setMinValue] = useState(0)
	const [maxValue, setMaxValue] = useState(100)

	return(
		<div>
			<input  type="number"/>
			<input type="number"/>
		</div>
	)
}