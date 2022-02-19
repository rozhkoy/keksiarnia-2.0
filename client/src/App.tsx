import React from 'react';
import './App.css';
import { css } from '@emotion/react';
import { Global } from '@emotion/react'
import {Route, Routes} from "react-router-dom";
import Admin from "./components/admin/Admin";
import Shop from "./components/shopPages/Shop";
import Categories from "./components/admin/components/pages/categories/Categories";

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
		<Routes>
			<Route path="/admin/*" element={<Admin/>}/>
			<Route path="/" element={<Shop/>}/>
		</Routes>
	</div>
  );
}

export default App;
