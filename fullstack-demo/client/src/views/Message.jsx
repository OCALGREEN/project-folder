import React, { useEffect, useState } from 'react' 
import axios from 'axios' 

const Message = () => {
    
    const [message, sentMessage] = useState()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/message`)
            .then(response => sentMessage(response.data))
            .catch(err => console.log(err)) 
    }, [])

    return (
        <fieldset>
            <legend> Message.jsx </legend>
            <h1>Message: {message && message}</h1>
        </fieldset>
    )
}

export default Message 