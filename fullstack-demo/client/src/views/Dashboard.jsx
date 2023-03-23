// grab all the pets from the backend 

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios' 

const Dashboard = () => {
    
    const [pets, setPets] = useState() 
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
            .then(res => setPets(res.data))
            .catch(err => console.log(err)) 
    }, [])

    return (
        <fieldset>
            <legend> Dashboard.jsx </legend>
            <table>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Hair Color</th>
                        <th>Age</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets && 
                            pets.map((pet, i) => (
                                <tr key={i}>
                                    <td><Link to={`/pets/${pet._id}`}>{ pet.petName }</Link></td>
                                    <td>{ pet.hairColor }</td>
                                    <td>{ pet.age }</td>
                                    <td><Link to={`/pets/${pet._id}/edit`}>Edit</Link></td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard 