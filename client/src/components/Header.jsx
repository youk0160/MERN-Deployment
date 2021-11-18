import React,{useEffect,useState} from 'react';
import {
    useLocation, Link
} from "react-router-dom";

const Header = (props)=>{
    const location = useLocation();
    const [currentPath,setCurrentPath] = useState("")

    useEffect(() => {
        console.log(location.pathname)
        setCurrentPath(location.pathname);
    },[location.pathname]);

    return(
        <div className="d-flex justify-content-between">
            <h1>Pet Shelter</h1>
            <h6>
                {
                    currentPath==="/"?
                    <Link to="/pets/new">add a pet to the shelter</Link>:
                    <Link to="/">back to home</Link>
                }
            </h6>
        </div>
    )
}

export default Header;