// edit = getOne + create 
// grab the id from the params (useParams) 
// use the id, axios, useEffect, useState (grab info from backend) 
// form and input (useState) 
// useHistory = redirect 

import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import { useHistory, useParams } from 'react-router-dom' 

const EditPet = () => {

    // get the id from the parameters 
    const {id} = useParams() // desctructure id from params
    // create variables to get the info from the pet
    const [petName, setPetName] = useState("") 
    const [hairColor, setHairColor] = useState("") 
    const [age, setAge] = useState(0) 
    const history = useHistory() 
    const [errors, setErrors] = useState() 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                const pet = res.data 
                setPetName(pet.petName) 
                setHairColor(pet.hairColor) 
                setAge(pet.age) 
            }) 
            .catch(err => console.log(err)) 
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.put(`http://localhost:8000/api/pets/${id}`, {petName, hairColor, age}) 
            .then(res => {
                history.push("/pets")
            }) 
            .catch(err => {
                const errorResponse = err.response.data.errors 
                // create an array for the error messages
                const errorArr = []
                // errorResponse = all the error keys 
                for(const key of Object.keys(errorResponse)) {
                    // grab the error message using the keys and push it 
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr) 
            }) 
    }


    // each input will need a value to pre-populate 
    return (
        <fieldset>
            <legend> EditPet.jsx </legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Pet Name</label>
                    <input type="text" name="petName" value={ petName } 
                        onChange={e => setPetName(e.target.value)}/> 
                </div>
                <div>
                    <label>Hair Color</label>
                    <input type="text" name="hairColor" value={ hairColor } 
                        onChange={e => setHairColor(e.target.value)}/> 
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" name="age" value={ age } 
                        onChange={e => setAge(e.target.value)}/> 
                </div>
                <button>Submit</button>
            </form>
            {
                errors && 
                errors.map((err, i) => {
                    return (
                        <p key={i} style={{color:"red"}}>{err}</p>
                    )
                })
            }
        </fieldset>
    )
}

export default EditPet 