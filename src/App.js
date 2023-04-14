import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navigation from './Pages/Navigation';
import Register from './Pages/Register';
import Store from './Pages/Store';

function App() {
	return (
		<div className='main_container'>
			<Navigation />
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/store' element={<Store />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/ourstory' element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
