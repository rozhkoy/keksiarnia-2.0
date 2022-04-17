import { Route, Routes } from 'react-router-dom';
import Auth from '../../pages/Auth';
import { MainPage } from '../../pages/MainPage';
import { Admin } from '../../pages/Admin';

const Providers = () => {
	return (
		<Routes>
			<Route path="/Sing_in" element={<Auth />} />
			<Route path="/Sing_up" element={<Auth />} />
			<Route path="/*" element={<MainPage />} />
			<Route path="/admin/*" element={<Admin />} />
		</Routes>
	);
};

export default Providers;
