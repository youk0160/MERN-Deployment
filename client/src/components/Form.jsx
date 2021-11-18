import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";


const Form = (props)=>{
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState([]);
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState("")

    const updateSkills = (e,i) =>{
        console.log(e.target.value);
        let newArr = [...skills];
        newArr[i] = e.target.value;
        setSkills(newArr);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:8080/api/pets', 
        {name, type, description, skills})
            .then(res=>{
                if(res.data.err) setFormErrors(res.data.err.errors)
                else navigate("/")
            })
            .catch(err=>console.log(err))
    }

    return(
        <>
            <h4 className="mx-4">Know a pet needing a home?</h4>
            <form onSubmit={handleSubmit}  className="d-flex justify-content-start">
                <div className="form-group mx-4">
                    <label for="name">Pet Name: </label>
                    <input type="text" className="form-control" name="name" id="name" onChange={(e)=> setName(e.target.value)} />
                    <p className="text-danger">{formErrors.name?.message}</p>
                    
                    <label for="type">Pet Type: </label>
                    <input type="text" className="form-control" name="type" id="type" onChange={(e)=> setType(e.target.value)} />
                    <p className="text-danger">{formErrors.type?.message}</p>
                    
                    <label for="description">Pet Description: </label>
                    <input type="text" className="form-control" name="description" id="description" onChange={(e)=> setDescription(e.target.value)} />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div className="form-group mx-4">
                    <label for="skill1">Skill 1: </label>
                    <input type="text" className="form-control" name="skill1" id="skills1" onChange={(e)=>updateSkills(e,0)} />
                    
                    <label for="skill2">Skill 2: </label>
                    <input type="text" className="form-control" name="skill2" id="skill2" onChange={(e)=>updateSkills(e,1)} />
                    
                    <label for="skill3">Skill 3: </label>
                    <input type="text" className="form-control" name="skill3" id="skill3" onChange={(e)=>updateSkills(e,2)} />
                    
                    <button type="submit" className="btn btn-dark ml-5">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form;