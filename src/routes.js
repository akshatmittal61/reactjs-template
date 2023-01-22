import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const protectedRoutes = [
	{
		path: "/dashboard",
		component: <Dashboard />,
	},
];

const routes = [
	...protectedRoutes.map((route) => ({
		path: route.path,
		component: (
			<PrivateRoute>
				{route.component}
			</PrivateRoute>
		)
	})
	),
	{
		path: "/",
		component: <Home />,
	},
	{
		path: "*",
		component: <NotFound />,
	},
];

export default routes;
