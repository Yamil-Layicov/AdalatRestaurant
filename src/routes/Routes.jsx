import HomeLayout from '../pages/homeLayout/HomeLayout'
import Home from '../pages/home/Home'
import Menu from '../pages/menu/Menu'
import Gallery from '../pages/gallery/Gallery'
import About from '../pages/about/About'
import Reservation from '../pages/reservation/Reservation'
import Login from '../pages/login/Login'
import Error404 from '../pages/error404/Error404'


const routes = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'reservation',
        element: <Reservation />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Error404/>,
  },
  // {
  //   path: '/admin',
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <PrivateRoute><AdminHome /></PrivateRoute>,
  //     },
  //     {
  //       path: 'profil',
  //       element: <PrivateRoute><AdminUsers /></PrivateRoute>,
  //     },
  //     {
  //       path: 'about',
  //       element: <PrivateRoute><AdminAbout /></PrivateRoute>,
  //     },
  //     {
  //       path: 'footer',
  //       element: <PrivateRoute><AdminFooter /></PrivateRoute>,
  //     },
  //     {
  //       path: 'amburan',
  //       element: <PrivateRoute><AdminAmburan /></PrivateRoute>,
  //     },
  //     {
  //       path: 'badamdar',
  //       element: <PrivateRoute><AdminBadamdar /></PrivateRoute>,
  //     },
  //     {
  //       path: 'reservation',
  //       element: <PrivateRoute><ReservationAdmin /></PrivateRoute>,
  //     },
  //   ],
  // },

];

export default routes;