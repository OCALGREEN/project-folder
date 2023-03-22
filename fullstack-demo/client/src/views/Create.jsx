// hase a from and then send information to backend
// form input = useState 
// axios = send info to backend 
// history = redirect 

import React, { useState }from 'react' 
import { useHistory } from 'react-router-dom' 
import axios from 'axios' 

const Create = () => {

    const [petName, setPetName] = useState("") 
    const [hairColor, setHairColor] = useState("") 
    const [age, setAge] = useState(0) 
    const history = useHistory() 

    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.post(`http://localhost:8000/api/pets`, {petName, hairColor, age})
            .then(res => {
                history.push("/pets")
            })
            .catch(err => console.log(err)) 
    }

    return (
        <fieldset>
            <legend> Create.jsx </legend>
            <form onSubmit={ handleSubmit }>
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
        </fieldset>
    )
}

export default Create 