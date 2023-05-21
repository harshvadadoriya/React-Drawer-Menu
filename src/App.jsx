import React from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawermenu from './Menu/Drawermenu';
import Home from './Pages/Home';
import ProductManagement from './Pages/ProductManagement';
import OrderManagement from './Pages/OrderManagement';
import UserManagement from './Pages/UserManagement';
import './App.css';
import PageNotFound from './Pages/PageNotFound';

const App = () => {
	return (
		<>
			<Router>
				<Drawermenu />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product-management" element={<ProductManagement />} />
					<Route path="/order-management" element={<OrderManagement />} />
					<Route path="/user-management" element={<UserManagement />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
