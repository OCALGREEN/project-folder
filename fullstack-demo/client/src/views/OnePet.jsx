// grab id from params
// using the id and axios 
// useEffect and useState 

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom' 

const OnePet = () => {

    const {id} = useParams() // desctructure id from params
    const [pet, setPet] = useState() 

useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => setPet(res.data)) 
        .catch(err => console.log(err)) 
}, [])

    return (
        <fieldset>
            <legend> OnePet.jsx </legend>
            {
                pet?
                <div>
                    <h3>{pet.petName}</h3>
                    <h3>Hair Color: {pet.hairColor}</h3>
                    <h3>Age: {pet.age}</h3>
                </div>: 
                <h1>Loading...</h1>
            }
        </fieldset>
    )
}

export default OnePet 