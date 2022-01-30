import {css} from "@emotion/react"
import styled from "@emotion/styled";
import bannerImg from "./banner.png"


const BanerBttn = styled.button`
	text-align: center;
  	background: transparent;
  	border: 1px solid #fff;
  	padding: 10px 50px;
  	border-radius: 40px;
  	font-size: 20px;
  	color: #fff;
  	transition: all 0.3s;
  	margin: 30px 0 0 0;
  &:hover{
    color:  #502424;
    background: #fff;
    
  }
  	
`;

const banner = css`
  background: #502424;
  padding: 240px 0 150px 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${bannerImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Banner = () => {
	return(
		<div css={banner}>
			<h1 css={css`color: #fff; text-align: center; font-size: 56px; `}>Cake and brownies made for You</h1>
			<h3 css={css`color: #fff`}>Our piece of art for any occasion!</h3>
				<BanerBttn>Catalog</BanerBttn>
		</div>
	)
}