
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import styled from "@emotion/styled";
import { css } from '@emotion/react';
import {Container} from "./components/container";
import {Header} from "./components/Header/Header";
import {Banner} from "./components/HomePage/Baner";
import { Global } from '@emotion/react'






function App() {

  return (

	<div css={css`height: 200vh;`}>
		<Global styles={css`
			body{
				font-family: 'IBM Plex Sans Thai Looped', sans-serif;
			}
			*{
				padding: 0;
				margin: 0;
			}
		`
		}/>
		<Header/>
		<Banner/>
		<Container>
		</Container>
	</div>
  );
}

export default App;
