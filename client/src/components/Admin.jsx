import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import { urlencoded } from 'express';

const Admin = (props)=>{
    const [serviceReqArray,setServiceReqArray]=useState([]);

    useEffect (() =>{
        axios.get('http://localhost:8080/api/serviceReqs')
            .then(res=>{setServiceReqArray(res.data.results)})
            .catch(err=>console.log("Err: ",err))
    },[setServiceReqArray]);

    return(
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Zip Code</th>
                        <th>House Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        serviceReqArray.map((serviceReq,key) => {
                            return (
                                <tr key={key}>
                                    <td>{serviceReq.name}</td>
                                    <td>{serviceReq.type}</td>
                                    <td>
                                        <Link to={`/serviceReqs/${serviceReq._id}`} className="btn btn-dark ml-5">Details</Link>
                                        <Link to={`/serviceReqs/${serviceReq._id}/edit`} className="btn btn-dark ml-5">Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Admin;