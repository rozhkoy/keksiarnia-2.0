
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import styled from "@emotion/styled";
import { css } from '@emotion/react';
import {Container} from "./components/container";
import {Header} from "./components/Header/Header";







function App() {
  return (
	<div className="App">
		<Container>
			<Header/>

		</Container>
	</div>
  );
}

export default App;
