import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Main = (props)=>{
    const [petArray,setPetArray]=useState([]);

    useEffect (() =>{
        axios.get('http://localhost:8080/api/pets')
            .then(res=>{setPetArray(res.data.results)})
            .catch(err=>console.log("Err: ",err))
    },[petArray]);
    
    return(
        <>
            <h4>These pets are looking for a good home</h4>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        petArray.map((pet,key) => {
                            return (
                                <tr key={key}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link to={`/pets/${pet._id}`} className="btn btn-dark ml-5">Details</Link>
                                        <Link to={`/pets/${pet._id}/edit`} className="btn btn-dark ml-5">Edit</Link>
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

export default Main;