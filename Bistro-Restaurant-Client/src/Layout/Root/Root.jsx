import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Root = () => {

    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div className='max-w-screen-2xl mx-auto'>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;