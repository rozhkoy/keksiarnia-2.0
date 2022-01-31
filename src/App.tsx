
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import styled from "@emotion/styled";
import { css } from '@emotion/react';
import {Container} from "./components/container";
import {Header} from "./components/Header/Header";
import {Banner} from "./components/HomePage/Banner/Baner";
import { Global } from '@emotion/react'
import { Wrapp } from './components/Wrapp/Wrapp';
import {Offer} from "./components/HomePage/Offers/Offers";






function App() {

  return (

	<div css={css`background: #eeeeee`}>
		<Global styles={css`
			*,
			*::before,
			*::after {
			  box-sizing: border-box;
			}
			ul[class],
			ol[class] {
			  padding: 0;
			}
			body,
			h1,
			h2,
			h3,
			h4,
			p,
			ul[class],
			ol[class],
			li,
			figure,
			figcaption,
			blockquote,
			dl,
			dd {
			  margin: 0;
			}
		
			body {
			  min-height: 100vh;
			  scroll-behavior: smooth;
			  text-rendering: optimizeSpeed;
			  line-height: 1.5;
			  font-family: 'IBM Plex Sans Thai Looped', sans-serif;
			}
			ul[class],
			ol[class] {
			  list-style: none;
			}
	
			a:not([class]) {
			  text-decoration-skip-ink: auto;
			}

			img {
			  max-width: 100%;
			  display: block;
			}
	
			article > * + * {
			  margin-top: 1em;
			}

			input,
			button,
			textarea,
			select {
			  font: inherit;
			}
		`}/>
		<Header/>
		<Wrapp>
			<Container>
				<Banner/>
				<Offer mainText={"Cake for you"}/>
			</Container>
		</Wrapp>
	</div>
  );
}

export default App;
