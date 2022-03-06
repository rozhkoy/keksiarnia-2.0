import {Navigate, Route, Routes} from "react-router-dom";
import Ui from "../../pages/Admin/ui";
import Auth from "../../pages/Auth/ui";




const Providers = () => {
	return(
		<Routes>
			<Route path="/admin/*" element={<Ui/>}/>
			<Route path="Auth" element={<Auth/>}/>
			{/*<Route*/}
			{/*	path="*"*/}
			{/*	element={<Navigate to="/admin/Categories"/>}*/}
			{/*/>*/}
			<Route
				path="*"
				element={<Navigate to="/Auth"/>}
			/>
		</Routes>
	)
}

export default Providers