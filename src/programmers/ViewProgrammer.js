import { queryAllByPlaceholderText } from '@testing-library/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

export default function ViewProgrammer() {

    const[programmer,setProgrammer] = useState({
        firstName:"",
        lastName:"",
        email:"",
        birthday:"",
        country:""
    })

    const {id}=useParams();

    useEffect(() =>{
        loadProgrammer()
    },[])

    const loadProgrammer = async () => {
        const result=await axios.get(`http://localhost:8080/api/programmers/${id}`)
        setProgrammer(result.data)
    }

    return (
         <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Programmer Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id : `${id}` 
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>First Name:</b>
                                    {programmer.firstName}
                                </li>
                                <li className="list-group-item">
                                    <b>Last Name:</b>
                                    {programmer.lastName}
                                </li>
                                <li className="list-group-item">
                                    <b>E-mail:</b>
                                    {programmer.email}
                                    
                                </li>
                                <li className="list-group-item">
                                    <b>Birthday:</b>
                                    {programmer.birthday}
                                    
                                </li>
                                <li className="list-group-item">
                                    <b>Country:</b>
                                    {programmer.country}
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to = {"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
