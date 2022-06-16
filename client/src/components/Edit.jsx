import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router";

const Edit = (props)=>{
    const {id} = useParams();
    const [nameHolder, setNameHolder] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState([]);
    const [formErrors, setFormErrors] = useState("")
    const navigate = useNavigate();

    const updateSkills = (e,i) =>{
        let newArr = [...skills];
        newArr[i] = e.target.value;
        setSkills(newArr);
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/api/pets/${id}`)
            .then(res => {
                setName(res.data.results.name);
                setNameHolder(res.data.results.name);
                setType(res.data.results.type);
                setDescription(res.data.results.description);
                setSkills(res.data.results.skills);
            })
    },[id]);


    const updatePet = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8080/api/pets/${id}`, {
            name, type, description, skills
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
                    <input type="text" className="form-control" value={skills[0]} name="skill1" onChange={(e)=>updateSkills(e,0)} />
                    
                    <label for="skill2">Skill 2: </label>
                    <input type="text" className="form-control" value={skills[1]} name="skill2" onChange={(e)=>updateSkills(e,1)} />
                    
                    <label for="skill3">Skill 3: </label>
                    <input type="text" className="form-control" value={skills[2]} name="skill3" onChange={(e)=>updateSkills(e,2)} />
                    <button type="submit">Edit</button>
                </div>
            </form>
        </>
    )
}

export default Edit;