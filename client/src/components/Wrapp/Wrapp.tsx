import {css} from "@emotion/react"

export interface AuxProps  {
	children: React.ReactNode
}

export const Wrapp = (props:AuxProps) => {

	return(
		<div css={css`padding: 120px 0 0 0`}>
			{props.children}
		</div>
	)
}