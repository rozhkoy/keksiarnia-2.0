import {Navigate, Route, Routes} from "react-router-dom";
import Ui from "../../pages/Admin/ui";




const Providers = () => {
	return(
		<Routes>
			<Route path="/admin/*" element={<Ui/>}/>
			<Route
				path="*"
				element={<Navigate to="/admin/Categories"/>}
			/>
		</Routes>
	)
}

export default Providers