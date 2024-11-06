let allPokemons = []
const getpokemons = (limit) => {
const url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}`
axios.get(url)
.then(Response ) => {
    let infopokemons = Response.data.results
}
}

let createCards = (pokemons)=>{
let PokemonsContainer = document.getElementById("PokemonsContainer")
pokemons.forEach(pokemons) => {
    let card = document.createElement("div")
    let title = document.createElement("p")
    let image = document.createElement("img")
    card.append(title,image);
    PokemonsContainer.append(card)
};
}
