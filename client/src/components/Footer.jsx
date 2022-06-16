import React,{useEffect,useState} from 'react';
import {
    useLocation, Link
} from "react-router-dom";

const Footer = (props)=>{
    const location = useLocation();
    const [currentPath,setCurrentPath] = useState("")

    useEffect(() => {
        console.log(location.pathname)
        setCurrentPath(location.pathname);
    },[location.pathname]);

    const head = {
        height:'80px',
        padding:'1.4vw 4vw'
    }

    return(
        <div className="bg-black d-flex justify-content-between align-items-center shadow rounded" style={{...head}}>
            <div className="d-flex justify-content-between align-items-center" style={{minWidth:'30vw', fontSize:'16px'}}id="menu">
                <Link to="/" className='text-decoration-none text-white'>Home</Link>
                <Link to="/" className='text-decoration-none text-white'>Sites</Link>
                <Link to="/" className='text-decoration-none text-white'>Request a Service</Link>
            </div>
        </div>
    )
}

export default Footer;