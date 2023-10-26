import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProgrammer() {


  let navigate = useNavigate()

  const {id}= useParams()


  const [programmer,setProgrammer] = useState({
    firstName:"",
    lastName:"",
    email:"",
    birthday:"",
    country:""
  })

  const{firstName,lastName,email,birthday,country}=programmer;


  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProgrammer({ ...programmer, [name]: value });
  };

  useEffect(()=>{
    loadProgrammer()
  },[]);
  

  const onSubmit=async (e)=>{
    e.preventDefault(); //this makes the url seems like /AddProgrammer in the end of the URL
    await axios.put(`http://localhost:8080/api/programmers/edit/${id}`,programmer)
    navigate("/");
  };

  const loadProgrammer = async ()=> {
    const result=await axios.get(`http://localhost:8080/api/programmers/${id}`)
    setProgrammer(result.data)
  }

  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Edit Programmer</h2>

        <form onSubmit={(e)=> onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
          First Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your First Name"
          name="firstName"
          value={firstName}
          onChange={(e) => onInputChange(e)}
          />
          </div>
          <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
          Last Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => onInputChange(e)}
          />
          </div>
          <div className="mb-3">
          <label htmlFor="email" className="form-label">
          E-mail
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter your Last E-mail"
             name="email"
             value={email}
             onChange={(e) => onInputChange(e)}
             />
             </div>
             <div className="mb-3">
          <label htmlFor="birthday" className="form-label">
          Birthday
          </label>
          <input
          type={"date"}
          className="form-control"
          placeholder="Enter your Birthday"
          name="birthday"
          value={birthday}
          onChange={(e) => onInputChange(e)}
          />
          </div> 
          <div className="mb-3">
          <label htmlFor="country" className="form-label">
          Country
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your Country"
          name="country"
          value={country}
          onChange={(e) => onInputChange(e)}
          />
          </div>  
          <button type="submit" className="btn btn-outline-primary"  >
            Submit
          </button>
          <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>
          </form>
      </div>
    </div>
  </div>
  
}