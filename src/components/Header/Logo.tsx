import LogoImage from "./logo.png"
import {css} from "@emotion/react"

export const Logo = () => {
	return(
		<img height="50px" src={LogoImage} css={css`padding: 0 0 0 15px`} alt=""/>
	)
}