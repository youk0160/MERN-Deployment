import React,{useEffect,useState} from 'react';
import {
    useLocation, Link
} from 'react-router-dom';
import logo from '../img/logo.png';

const Header = (props)=>{
    const location = useLocation();
    const [currentPath,setCurrentPath] = useState('')

    useEffect(() => {
        console.log(location.pathname)
        setCurrentPath(location.pathname);
    },[location.pathname]);

    return(
        <div id='heading' className='d-flex justify-content-between align-items-center shadow bg-black sticky-top'>
            <img src={logo} alt='logo' id='logo'></img>
            <div className='d-flex justify-content-between align-items-center' id='menu'>
                <Link to='/' className='text-decoration-none text-white '>Home</Link>
                <Link to='/request' className='text-decoration-none text-white'>Request Service</Link>
            </div>
            {/* <h6>
                {
                    currentPath==='/'?
                    <Link to='/pets/new'>add a pet to the shelter</Link>:
                    <Link to='/'>back to home</Link>
                }
                <a href='https://www.freepik.com/vectors/gutter'>Gutter vector created by vectorjuice - www.freepik.com</a>
                <a href='https://www.freepik.com/vectors/table-chair'>Table and chair vector created by pch.vector - www.freepik.com</a>
                <a href='https://www.freepik.com/vectors/home-repair'>Home repair vector created by pch.vector - www.freepik.com</a>
            </h6> */}
        </div>
    )
}

export default Header;