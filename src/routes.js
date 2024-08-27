import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgetPassword';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import ProtectedRoutes from './protecteRoutes';
import DataGridDemo from './components/Datagrid';

const router = createBrowserRouter([

  {
    path: "/",
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          // { index: true, element: <DataGridDemo/>}
          /* the rest of the routes */
        ],
      }, 
    ],
  },
  
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path:"*",
    element:<PageNotFound/>,
    errorElement: <ErrorPage />,
}
]);

export default function Router() {
  return <RouterProvider router={router} />
}