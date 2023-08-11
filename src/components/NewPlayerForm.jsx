import React, { useState } from 'react'

export default function NewPlayerForm() {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const[age, setAge] = useState(0)
    const[image, setImage] = useState("")
    const onSubmit = (event) => {event.preventDefault();}
    const formData = {name:name,breed:breed,age:age,imageUrl:image} 
      
    

    // const addNewPlayer = async (playerObj) => {
    //     try {
    //         const cohortName = "2302-acc-et-web-pt-e"
    //         const players = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`)
    //        console.log(players)
    //     } catch (err) {
    //         console.error('Oops, something went wrong with adding that player!', err);
    //     }
    // }

    return (
        <form id="new-player-form">
    
        <input type="text" id="name" placeholder="Enter puppy name" required></input>
        <input type="text" id="breed" placeholder="Enter breed" required></input>
        <input type="number" id="age" placeholder="Enter age" required></input>
        <input type="url" id="imageUrl" placeholder="Enter image URL" required></input>
        <button type="submit">Add player</button>
       
       </form>
       
    )
}  
