
import "./style.scss"
import React from "react";

export interface AuxProps  {
	children: React.ReactNode
}

export const Container = (props: AuxProps) => {

	return(
		<div>
			{props.children}
		</div>
	)
}
