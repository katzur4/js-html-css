// 1. player can join
//  a. only 1 player join by clicking new game button
//  b. new game button disappears. the player will be directed to pokemon select screen
// 2. player can select pokemon
//  a. players select 1 of the 3 pokemons by clicking the pokemon image
//  b. each  pokemon has img, name, health bar and, attack button. These attributes will be shown to the user after the pokemon is selected.
//  c. unslected pokemons will disappear.

const newGameButton = document.querySelector("#newGame");
const pokemonSelect = document.querySelector("#pokemonSelect");
const pokemonOption = document.querySelectorAll("#pokemonOption");

newGameButton.addEventListener("click", (e) =>{
    newGameButton.classList.toggle("display-none", true);
    pokemonSelect.classList.remove("display-none", true)
    pokemonSelect.classList.toggle("display-flex", true)
    console.log(pokemonOption)
});



