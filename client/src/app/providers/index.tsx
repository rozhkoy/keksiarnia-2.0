import { Route, Routes } from 'react-router-dom';
import Auth from '../../pages/Auth';
import { Admin } from '../../pages/Admin';
import { Shop } from 'src/pages/Shop';

const Providers = () => {
	return (
		<Routes>
			<Route path="/Sing_in" element={<Auth />} />
			<Route path="/Sing_up" element={<Auth />} />
			<Route path="/*" element={<Shop />} />
			<Route path="/admin/*" element={<Admin />} />
		</Routes>
	);
};

export default Providers;
