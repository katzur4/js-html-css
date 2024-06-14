// 1. player can join
//  a. only 1 player join by clicking new game button
//  b. the player will be directed to pokemon select screen
// 2. player can select pokemon
//  a. players select 1 of the 3 pokemons by clicking the pokemon image
//  b. each  pokemon has img, name, health bar and, attack button. These attributes will be shown to the user after the pokemon is selected.
//  c. unslected pokemons will disappear.

// 3. player 2 will automatically be selected from matchmaking pool
//  a. 
//  a.players battle by clicking attack button.
//  b.when attack button is clicked pokemon will do damage to its opponent.
//  c.health bar will decrease until it reaches zero and the pokemon is dead.
// notes
// this is how to make user story
// specify UI actionable component
// specify the next UI/action after clicking actionable component
// specify quantity if applicable
// 


function ember(){
console.log("throw");
}
class Firetype {
    constructor(name,type){
        this.name = name;
        this.type = type;
        this.damage = 30;
        this.speed = 30;
        this.health = 50;
        this.img = "./assets/img/charmander.png";
    }
    flamethrower(target){
        console.log("throw")
    }
    attack(target,attack){
        switch (attack){
            case "ember":
                ember();
                break;
            case "scratch":
            case "growl":

        }
    }
}
class Leaftype {
    constructor(name,type){
        this.name = name;
        this.type = type;
        this.damage = 10;
        this.speed = 40;
        this.health = 100;
        this.img = "./assets/img/bulbasaur.png";
    }
    bulletseed(target){
        console.log("bang")
    }
}
class Watertype {
    constructor(name,type){
        this.name = name;
        this.type = type;
        this.damage = 20;
        this.speed = 30;
        this.health = 75;
        this.img = "./assets/img/psyduck.png";
    }
    watergun(target){
        console.log("boom")
    }
}

const createPokemon = document.querySelector('#p2Attack');
const players = [];
function makePokemon(name, type){
    return  newPokemon = type==="fire" ? new Firetype(name,type) : type==="leaf" ? new Leaftype(name,type) : new Watertype(name,type); 
}
createPokemon.addEventListener("click",(e) => {
    console.log("hello")
    players.push(makePokemon("Charmander", "fire"));
    console.log(players);
    // players[0].Firetype.name()
});


const newGame = document.querySelector("#newGame");
newGame.addEventListener("click", (e) =>{
    document.querySelector(".home").classList.toggle("display-none",true);
    document.querySelector(".battle").classList.toggle("display-block",true);
    newGame.classList.toggle("display-none",true)
});

function setPokemonAttrib1(){
    pokemonSelect[0].classList.toggle("display-none",true);
    pokemonNameContainer[0].classList.remove("")
    pokemonImgContainer
    pokemonHealthbarContainer
    pokemonAttackContainer
    p1Name.innerHTML = players[0].name;
    p1CurrentHealth.innerHTML =  players[0].health;
    p1Img.setAttribute("src",players[0].img);
}
function setPokemonAttrib2(){
    pokemonSelect[1].classList.toggle("display-none",true);
    p2Name.innerHTML = players[0].name;
    p2CurrentHealth.innerHTML =  players[0].health;
    p2Img.setAttribute("src",players[0].img);
}
const pokemonNameContainer = document.querySelectorAll(".pokemonAttackContainer");
const pokemonImgContainer = document.querySelectorAll(".pokemonAttackContainer");
const pokemonHealthbarContainer = document.querySelectorAll(".pokemonAttackContainer");
const pokemonAttackContainer = document.querySelectorAll(".pokemonAttackContainer");

const pokemonSelect = document.querySelectorAll("#selectPokemon");
const p1Charmander = document.querySelector("#p1Charmander");
const p1Bulbasaur = document.querySelector("#p1Bulbasaur");
const p1Psyduck = document.querySelector("#p1Psyduck");
const p1Name = document.querySelector('#p1Name');
const p1CurrentHealth = document.querySelector('#p1CurrentHealth');
const p1healthBar = document.querySelector('.p1HealthBarContainer');
const p1Img = document.querySelector("#p1Img");
const p1Attack = document.querySelector('#p1Attack');



p1Charmander.addEventListener("click",(e) =>{
    players.push(makePokemon("Charmander", "fire"));
    setPokemonAttrib1();
    p1Attack.addEventListener("click", (e) =>{
        players[0].flamethrower();
    });

});
p1Bulbasaur.addEventListener("click",(e) =>{
    players.push(makePokemon("Bulbasaur", "leaf"));
    setPokemonAttrib1();
    p1Attack.addEventListener("click", (e) =>{
        players[0].bulletseed();
    });

});
p1Psyduck.addEventListener("click",(e) =>{
    players.push(makePokemon("Psyduck", "water"));
    setPokemonAttrib1();
    p1Attack.addEventListener("click", (e) =>{
        players[0].watergun();
    });
});

const p2Charmander = document.querySelector("#p2Charmander");
const p2Bulbasaur = document.querySelector("#p2Bulbasaur");
const p2Psyduck = document.querySelector("#p2Psyduck");
const p2Name = document.querySelector('#p2Name');
const p2CurrentHealth = document.querySelector('#p2CurrentHealth');
const p2healthBar = document.querySelector('.p2HealthBarContainer');
const p2Img = document.querySelector("#p2Img");
const p2Attack = document.querySelector('#p2Attack');

p2Charmander.addEventListener("click",(e) =>{
    players.push(makePokemon("Charmander", "fire"));
    setPokemonAttrib2();
    p2Attack.addEventListener("click", (e) =>{
        players[0].flamethrower();
    });

});
p2Bulbasaur.addEventListener("click",(e) =>{
    players.push(makePokemon("Bulbasaur", "leaf"));
    setPokemonAttrib2();
    p2Attack.addEventListener("click", (e) =>{
        players[0].bulletseed();
    });

});
p2Psyduck.addEventListener("click",(e) =>{
    players.push(makePokemon("Psyduck", "water"));
    setPokemonAttrib2();
    p2Attack.addEventListener("click", (e) =>{
        players[0].watergun();
    });
});

// console.log(test);