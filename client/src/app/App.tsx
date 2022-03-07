import React from 'react';
import './style.scss';
import Providers from './providers';
import { QueryClient } from 'react-query';


const queryClient = new QueryClient();

function App() {
	return (
		<div>
			<Providers />
		</div>
	);
}

export default App;
