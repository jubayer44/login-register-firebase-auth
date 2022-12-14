import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import About from './components/About';
import Pricing from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Main from './Layout/Main';
import PrivateRoute from './Routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/home',
          element: <Home/>
        },
        {
          path: '/profile',
          element: <PrivateRoute><Profile/></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/pricing',
          element: <PrivateRoute><Pricing/></PrivateRoute>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    }
  ]);
  return (
    <div >
     <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
