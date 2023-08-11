import React, { useState } from 'react'

function NewPlayerForm() {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const[age, setAge] = useState(0)
    const[image, setImage] = useState("")
    const onSubmit = (event) => {event.preventDefault();
    const formData = {name:name,breed:breed,age:age,imageUrl:image} 
      
    }

    const addNewPlayer = async (playerObj) => {
        try {
            const cohortName = "2302-acc-et-web-pt-e"
            const players = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`)
            renderAllPlayers(player);
        } catch (err) {
            console.error('Oops, something went wrong with adding that player!', err);
        }
    };


    return (
        <form id="new-player-form">
    
        <input type="text" id="name" placeholder="Enter puppy name" required>
        <input type="text" id="breed" placeholder="Enter breed" required>
        <input type="number" id="age" placeholder="Enter age" required>
        <input type="url" id="imageUrl" placeholder="Enter image URL" required>
        <button type="submit">Add player</button>
       
       </form>
       `;
    )
}
const renderNewPlayerForm = () => {
    try {
    
    // Add form to DOM
    newPlayerFormContainer.innerHTML = `
  
    
    //Adding event listener for submitting the form
    document.getElementById('new-player-form').addEventListener('submit', async (event) => {
     event.preventDefault();
     console.log('Form submitted');
    
 
     console.log('Form data:', playerObj);
    
     // Adding new player and re-rendering all players
     await addNewPlayer(playerObj);
     const players = await fetchAllPlayers();
     renderAllPlayers(players);
    });
    } catch (err) {
    console.error('Uh oh, trouble rendering the new player form!', err);
    }
    }
    
    
    const init = async () => {
    
    //Fetch and render all the payers
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
    
    renderNewPlayerForm();
    }
    
    init();
export default NewPlayerForm
