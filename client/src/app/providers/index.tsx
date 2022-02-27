import {Navigate, Route, Routes} from "react-router-dom";
import Admin from "../../components/admin/Admin";




const Providers = () => {
	return(
		<Routes>
			<Route path="/admin/*" element={<Admin/>}/>
			<Route
				path="*"
				element={<Navigate to="/admin/Categories"/>}
			/>
		</Routes>
	)
}

export default Providers