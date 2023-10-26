import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

// import { handleLogin } from './utils/useHandleLogin';


export default function Home() { 


    const [programmers,setProgrammers] = useState([])

    const {id}=useParams()

    useEffect(() => {
        loadProgrammers();
    },[]);

    const loadProgrammers=async()=> {
        const result=await axios.get("http://localhost:8080/api/programmers/get")
        setProgrammers(result.data);
    }

    const deleteProgrammer=async (id)=> {
      await axios.delete(`http://localhost:8080/api/programmers/${id}`)
      loadProgrammers()
    }

    // const handleLogin = useHandleLogin();


  return (
    <div className='container'>
        <div className='py-4'>
        {/* <button onClick={usehandleLogin}>Log in with GitHub</button> */}
        <table class="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Birthday</th>
      <th scope="col">Country</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        programmers.map((programmer,index) =>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{programmer.firstName}</td>
            <td>{programmer.lastName}</td>
            <td>{programmer.email}</td>
            <td>{programmer.birthday}</td>
            <td>{programmer.country}</td>
            <td>
                <Link className="btn btn-primary mx-2"
                to={`/viewProgrammer/${programmer.id}`}
                >View</Link>


                <Link className="btn btn-outline-primary mx-2"
                to={`/editprogrammer/${programmer.id}`}
                >Edit</Link>
                <button className="btn btn-danger mx-2"
                
                onClick={()=>deleteProgrammer(programmer.id)}
                >Delete</button>
            </td>
        </tr>
        ))
    }
  </tbody>
</table>

        </div>
    </div>
  )
}
