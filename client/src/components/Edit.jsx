import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router";

const Edit = (props)=>{
    const {id} = useParams();
    const [nameHolder, setNameHolder] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [formErrors, setFormErrors] = useState("")
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8080/api/pets/${id}`)
            .then(res => {
                setName(res.data.results.name);
                setNameHolder(res.data.results.name);
                setType(res.data.results.type);
                setDescription(res.data.results.description);
                setSkill1(res.data.results.skill1);
                setSkill2(res.data.results.skill2);
                setSkill3(res.data.results.skill3);
            })
    },[id]);


    const updatePet = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8080/api/pets/${id}`, {
            name, type, description, skill1, skill2, skill3
        })
            .then(res=>{
                if(res.data.err) setFormErrors(res.data.err.errors)
                else navigate("/")
            })
            .catch(err=>console.log("Err: ",err))
    }

    return(
        <>
            <h4 className="mx-4">Edit {nameHolder}</h4>
            <form onSubmit={updatePet} className="d-flex justify-content-start">
                <div className="form-group mx-4">
                    <label for="name">Pet Name: </label>
                    <input type="text" className="form-control" value={name} name="name" id="name" onChange={(e)=> setName(e.target.value)} />
                    <p className="text-danger">{formErrors.name?.message}</p>
                    
                    <label for="type">Pet Type: </label>
                    <input type="text" className="form-control" value={type} name="type" id="type" onChange={(e)=> setType(e.target.value)} />
                    <p className="text-danger">{formErrors.type?.message}</p>
                    
                    <label for="description">Pet Description: </label>
                    <input type="text" className="form-control" value={description} name="description" id="description" onChange={(e)=> setDescription(e.target.value)} />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div className="form-group">    
                    <label for="skill1">Skill 1: </label>
                    <input type="text" className="form-control" value={skill1} name="skill1" id="skills1" onChange={(e)=>setSkill1(e.target.value)} />
                    
                    <label for="skill2">Skill 2: </label>
                    <input type="text" className="form-control" value={skill2} name="skill2" id="skill2" onChange={(e)=>setSkill2(e.target.value)} />
                    
                    <label for="skill3">Skill 3: </label>
                    <input type="text" className="form-control" value={skill3} name="skill3" id="skill3" onChange={(e)=>setSkill3(e.target.value)} />
                    <button type="submit">Edit</button>
                </div>
            </form>
        </>
    )
}

export default Edit;