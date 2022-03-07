import {Navigate, Route, Routes} from "react-router-dom";
import Ui from "../../pages/Admin/ui";
import Auth from "../../pages/Auth/ui";




const Providers = () => {
	return(
		<Routes>
			<Route path="/admin/*" element={<Ui/>}/>
			<Route path="/Singin" element={<Auth/>}/>
			<Route path="/Singup" element={<Auth/>}/>
			{/*<Route*/}
			{/*	path="*"*/}
			{/*	element={<Navigate to="/Singin"/>}*/}
			{/*/>*/}
		</Routes>
	)
}

export default Providers