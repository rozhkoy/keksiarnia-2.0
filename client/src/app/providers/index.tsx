import {Navigate, Route, Routes} from "react-router-dom";
import Auth from "../../pages/Auth/ui";




const Providers = () => {
	return(
		<Routes>
			<Route path="/Sing_in" element={<Auth/>}/>
			<Route path="/Sing_up" element={<Auth/>}/>
			{/*<Route*/}
			{/*	path="*"*/}
			{/*	element={<Navigate to="/Singin"/>}*/}
			{/*/>*/}
		</Routes>
	)
}

export default Providers