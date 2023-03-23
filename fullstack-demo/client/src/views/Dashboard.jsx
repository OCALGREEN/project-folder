// grab all the pets from the backend 

import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom' 
import axios from 'axios' 

const Dashboard = () => {
    
    const [pets, setPets] = useState() 
    const history = useHistory() 
    const [refresh, setRefresh] = useState(true) 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
            .then(res => setPets(res.data))
            .catch(err => console.log(err)) 
    }, [refresh])

    // have a refresh state to make sure useEffect gets reloaded
    const handleDelete1 = (deleteId) => {
        axios.delete(`http://localhost:8000/api/pets/${deleteId}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err)) 
    }

    // 
    const handleDelete2 = (deleteId) => {
        axios.delete(`http://localhost:8000/api/pets/${deleteId}`)
            .then(res => {
                const filteredList = pets.filter((pet) => pet._id !== deleteId)
                setPets(filteredList) 
            })
            .catch(err => console.log(err)) 
    }

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
                                    <td><button onClick={() => handleDelete1(pet._id)}>Delete 1</button></td>
                                    <td><button onClick={() => handleDelete2(pet._id)}>Delete 2</button></td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard 