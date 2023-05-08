import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './app.scss';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import Register from './pages/Register/Register';
import Store from './pages/Store/Store';

const Layout = () => {
	return (
		<div className='app'>
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/store',
				element: <Store />,
			},
			{
				path: '/product:/:id',
				element: <Product />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
