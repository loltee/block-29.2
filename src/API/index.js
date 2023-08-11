const cohortName = "2302-acc-et-web-pt-e"
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`


export async function getAllPlayers(){
    try {
        // https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players.  
        const response=  await fetch(`${baseUrl}/players`)
        console.log (response)
        const players = await response.json();
        return players
    } catch (error) {
        console.log(error)
    }
    
}
// const players = getAllPlayers()
// console.log (players)

// async function fetchMoviesJSON() {
//     const response = await fetch('/movies');
//     const movies = await response.json();
//     return movies;
//   }
  
  getAllPlayers().then(players => {
    players; 

  }