import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import './app.scss';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Product from './Pages/Product/Product';
import Register from './Pages/Register/Register';
import Store from './Pages/Store/Store';

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
				paths: '/',
				element: <Home />,
			},
			{
				paths: '/store',
				element: <Store />,
			},
			{
				paths: '/product:/:id',
				element: <Product />,
			},
			{
				paths: '/blog',
				element: <Blog />,
			},
			{
				paths: '/about',
				element: <About />,
			},
			{
				paths: '/login',
				element: <Login />,
			},
			{
				paths: '/register',
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
