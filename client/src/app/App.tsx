import React from 'react';

import Providers from "./providers";
import {QueryClient, QueryClientProvider} from "react-query";	


const queryClient = new QueryClient();

function App() {

  return (

	<div>
		<QueryClientProvider client={queryClient}>

			<Providers/>

			{/*<ReactQueryDevtools initialIsOpen={false} />*/}
		</QueryClientProvider>

	</div>
  );
}

export default App;
