//server
import React from "react";


export const ServerConnection = props => {

    const getData = async () => {
        const response = await fetch('https://rn-cysticfibrosis-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
            method: 'GET',//by default
            headers: {'Content-Type': 'application/json'},
            // body: JSON.stringify({name})
        })
        const data = await response.json()
        console.log('DATA', data)
        props.get(data);
    }

    const setData = async ({id, email, pass, userName}) => {
        const response = await fetch('https://rn-cysticfibrosis-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
            method: 'POST',//by default
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id,
                email,
                pass,
                userName,
            })
        })
        const data = await response.json()
        console.log('DATA', data)
        props.set(data);
    }


}

