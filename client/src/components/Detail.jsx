import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import {useNavigate} from "react-router-dom";

const Detail = (props)=>{
    const {id} = useParams();
    const [petInfo, setPetInfo] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/pets/${id}`)
            .then(res=>{
                console.log(res.data.results)
                setPetInfo(res.data.results)
            })
            .catch(err=>console.log("err ", err))
    },[id])

    const deleteHandler = (e,id) => {
        axios.delete(`http://localhost:8080/api/pets/${id}`)
        .then(res=>{
            console.log("Successfully deleted",res)
            navigate("/");
        })
        .catch(err=>console.log("err ", err))
    }
    
    return(
        <>
            <div className="d-flex justify-content-between">
                <h4>Details about: {petInfo.name}</h4>
                <button className="btn btn-success" onClick = {(e)=>deleteHandler(e,petInfo._id)}>Adopt {petInfo.name}</button>
            </div>
            <div className="border border-secondary my-3 p-3 d-flex justify-content-start">
                <div className="mx-3">
                    <h5>Pet Type:</h5>
                    <h5>Description:</h5>
                    {
                        petInfo.skills?
                            <h5>Skills:</h5>:
                            ""
                    }
                </div>
                <div>
                    <h5>{petInfo.type}</h5>
                    <h5>{petInfo.description}</h5>
                    {
                        petInfo.skills?
                            petInfo.skills.map((skill) => 
                                <h5>{skill}</h5>
                            ):
                            ""
                    }
                </div>
            </div>
        </>
    )
}

export default Detail;