import {Route, Routes} from "react-router-dom";
import Admin from "../../components/admin/Admin";




const Providers = () => {
	return(
		<Routes>
			<Route path="/admin/*" element={<Admin/>}/>
			<Route path="/" element={<Admin/>}/>
		</Routes>
	)
}

export default Providers