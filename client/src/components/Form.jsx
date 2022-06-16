import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import reqServBg from '../img/reqServBg.jpeg';


const Form = (props)=>{
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [houseType, setHouseType] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState('')

    // const updateSkills = (e,i) =>{
    //     let newArr = [...skills];
    //     newArr[i] = e.target.value;
    //     setSkills(newArr);
    // }

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:8080/api/serviceReq', 
        {firstName, lastName, phone, email, zipCode, houseType, description})
            .then(res=>{
                if(res.data.err) setFormErrors(res.data.err.errors)
                else navigate('/')
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className='bg-secondary'>
                <img src={reqServBg} alt='bg' id='rs-bg'></img>
                <div className='d-flex justify-content-center align-items-stretch' id='formContainer'>
                    <div className='me-5 text-white align-middle'>
                        <h2 className='mb-5'>Request Service</h2>
                        <h6>Email - ITSCONLLC@GMAIL.COM</h6>
                        <h6>Phone - (804)714-5428</h6>
                    </div>
                    <form onSubmit={handleSubmit}  className='py-5 px-4 border border-black mx-0 row bg-white'>
                            <div className='col-md-6  form-floating'>
                                <input type='text' className='form-control px-2' name='firstName' id='firstName' placeholder='First Name' onChange={(e)=> setfirstName(e.target.value)} />
                                <label for='firstName' className='px-4 py-2'>First Name</label>
                                <p className='text-danger'>{formErrors.firstName?.message}</p>
                            </div>
                            <div className='col-md-6  form-floating'>
                                <input type='text' className='form-control px-2' name='lastName' id='lastName' placeholder='Last Name' onChange={(e)=> setlastName(e.target.value)} />
                                <label for='lastName' className='px-4 py-2'>Last Name</label>
                                <p className='text-danger'>{formErrors.lastName?.message}</p>
                            </div>
                            <div className='col-12 form-floating'>
                                <input type='tel' className='form-control px-2' name='phone' id='phone' placeholder='(000)000-0000' onChange={(e)=> setPhone(e.target.value)} />
                                <label for='phone' className='px-4 py-2'>Phone Number</label>
                                <p className='text-danger'>{formErrors.phone?.message}</p>
                            </div>
                            <div className='col-12 form-floating'>
                                <input type='text' className='form-control px-2' name='email' id='email' placeholder='name@example.com' onChange={(e)=> setEmail(e.target.value)} />
                                <label for='email' className='px-4 py-2'>Email</label>
                                <p className='text-danger'>{formErrors.email?.message}</p>
                            </div>
                            <div className='col-md-6 form-floating'>
                                <input type='text' className='form-control px-2' name='zipCode' id='zipCode' placeholder='00000' onChange={(e)=> setZipCode(e.target.value)} />
                                <label for='zipCode' className='px-4 py-2'>Zip Code</label>
                                <p className='text-danger'>{formErrors.zipCode?.message}</p>
                            </div>
                            <div className='col-md-6  form-floating'>
                                <select className='form-select' id='houseType' placeholder='type' aria-label='Floating label select example' onChange={(e)=> setHouseType(e.target.value)}>
                                    <option selected></option>
                                    <option value='Townhome'>Townhome</option>
                                    <option value='Apt'>Apt</option>
                                    <option value='House'>House</option>
                                </select>
                                <label for='floatingSelectGrid' className='px-4'>House Type</label>
                                <p className='text-danger'>{formErrors.houseType?.message}</p>
                            </div>
                            <div className='col-12 form-floating'>
                                <textarea className='form-control' name='description' id='description' placeholder='description' style={{height:'120px'}} onChange={(e)=> setDescription(e.target.value)} />
                                <label for='description' className='px-4 py-2'>Job Description</label>
                                <p className='text-danger'>{formErrors.description?.message}</p>
                            </div>


                            <button type='submit' className='btn btn-dark'>Submit</button>
                    </form>
                </div>
                
        </div>
    )
}

export default Form;

{/* <label for='skill1'>Skill 1: </label>
                            <input type='text' className='' name='skill1' onChange={(e)=>updateSkills(e,0)} />

                            <label for='skill2'>Skill 2: </label>
                            <input type='text' className='' name='skill2' onChange={(e)=>updateSkills(e,1)} />

                            <label for='skill3'>Skill 3: </label>
                            <input type='text' className='' name='skill3' onChange={(e)=>updateSkills(e,2)} /> */}