
import { css } from '@emotion/react';

export interface AuxProps  {
	children: React.ReactNode
}

export const Container = (props: AuxProps) => {

	return(
		<div css={css`
			background-color: #ccc3;
			width: 100%;
			z-index: -1;
			box-sizing: border-box;
			position: relative;
			@media (min-width: 575.98px){
				  margin: auto;
				  padding: 0;
			};
			@media (min-width: 768.98px){
			  max-width: 720px;
			};
			@media (min-width: 991.98px) {
			  max-width: 960px;
			};
			@media (min-width: 1199.98px){
			  max-width: 1140px;
			}
		`}>
			{props.children}
		</div>
	)
}
