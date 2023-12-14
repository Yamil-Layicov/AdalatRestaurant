import HomeLayout from '../pages/homeLayout/HomeLayout'
import Home from '../pages/home/Home'
import MenuPage from '../pages/menu/MenuPage'
import Gallery from '../pages/gallery/Gallery'
// import About from '../pages/about/About'
import Reservation from '../pages/reservation/Reservation'
import Login from '../pages/login/Login'
import Error404 from '../pages/error404/Error404'
import PrivateRoute from './PrivateRoute'
import AdminLayout from '../admin/adminLayout/AdminLayout'

import AdminHome from '../admin/pages/home/AdminHome'
import Settings from '../admin/pages/setting/Settings'
import AdminAbout from '../admin/pages/about/AdminAbout'
import Banners from '../admin/pages/banners/Banners'
// import AdminGallery from '../admin/pages/gallery/AdminGallery'

import AdminSliderLayout from '../admin/pages/slider/adminSliderLayout/AdminSliderLayout'
import AdminSlider from '../admin/pages/slider/AdminSlider'
import SliderCreate from '../admin/pages/slider/sliderCreate/SliderCreate'
import SliderEdit from '../admin/pages/slider/sliderEdit/SliderEdit'


import AdminNewsLayout from '../admin/pages/news/adminNewsLayout/AdminNewsLayout'
import AdminNews from '../admin/pages/news/AdminNews'
import NewsCreate from '../admin/pages/news/newsCreate/NewsCreate'
import NewsEdit from '../admin/pages/news/newsEdit/NewsEdit'

import AdminFeaturesLayout from '../admin/pages/features/adminFeaturesLayout/AdminFeaturesLayout'
import AdminFeatures from '../admin/pages/features/AdminFeatures'
import FeaturesCreate from '../admin/pages/features/featuresCreate/FeaturesCreate'
import FeaturesEdit from '../admin/pages/features/featuresEdit/FeaturesEdit'


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
        element: <MenuPage />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      // {
      //   path: 'about',
      //   element: <About />,
      // },
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
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <PrivateRoute><AdminHome /></PrivateRoute>,
      },
      {
        path: 'settings',
        element: <PrivateRoute><Settings/></PrivateRoute>,
      },
      {
        path: 'about',
        element: <PrivateRoute><AdminAbout /></PrivateRoute>,
      },
      {
        path: 'banners',
        element: <PrivateRoute><Banners /></PrivateRoute>,
      },
      // {
      //   path: 'gallery',
      //   element: <PrivateRoute><AdminGallery/></PrivateRoute>,
      // },
      {
        path: 'slider',
        element: <PrivateRoute><AdminSliderLayout/></PrivateRoute>,
        children:[
          {
            index:true,
            element: <PrivateRoute><AdminSlider/></PrivateRoute>,
          },
          {
            path:"yarat",
            element: <PrivateRoute><SliderCreate/></PrivateRoute>,
          },
          {
            path:":id",
            element: <PrivateRoute><SliderEdit/></PrivateRoute>,
          },
        ]
      },
      {
        path: 'header',
        element: <PrivateRoute><AdminFeaturesLayout/></PrivateRoute>,
        children:[
          {
            index:true,
            element: <PrivateRoute><AdminFeatures/></PrivateRoute>,
          },
          {
            path:"yarat",
            element: <PrivateRoute><FeaturesCreate/></PrivateRoute>,
          },
          {
            path:":id",
            element: <PrivateRoute><FeaturesEdit/></PrivateRoute>,
          },
        ]
      },
      {
        path: 'menu',
        element: <PrivateRoute><AdminNewsLayout/></PrivateRoute>,
        children:[
          {
            index:true,
            element: <PrivateRoute><AdminNews/></PrivateRoute>,
          },
          {
            path:"yarat",
            element: <PrivateRoute><NewsCreate/></PrivateRoute>,
          },
          {
            path:":id",
            element: <PrivateRoute><NewsEdit/></PrivateRoute>,
          },
        ]
      },
    ],
  },

];

export default routes;