import {Navigate} from 'react-router-dom';
import Examples from '../pages/Examples';
import ExampleDetail from '../pages/ExampleDetail';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import ContactsPage from '../pages/ContactsPage';
import NotFound from '../pages/NotFound';


const routes = [
    {path: '/', element: <HomePage />, exact: true},
    {path: '/examples', element: <Examples />, exact: true},
    {path: '/examples/:id', element: <ExampleDetail />, exact: true},
    {path: '/about_us', element: <AboutUs />, exact: true},
    {path: '/contacts', element: <ContactsPage />, exact: true},
    {path: '/not_found', element: <NotFound />, exact: true},
    {path: '*', element: <Navigate replace to='/not_found' />},
]

export default routes;
