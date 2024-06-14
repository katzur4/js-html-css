console.log("hello wordl");

const numberGroups = [
    [1,2,3,4],
    [5,6,7],
    [8,9]
];

const myFriends = [
    "bob",
    "the",
    "builder"
];
// for(let i = 0; i < myArr.length; i++){
//    for(let j = 0; j < myArr[i].length; j++ ){
//     console.log(myArr[i][j]);
//    }
// }

// numberGroups.forEach((numberGroup) =>{
//     numberGroup.forEach((num) =>{
//         console.log(num);
//     });
// });

// const filteredNums = numberGroups.filter(
//     (numberGroup) => {
//         return numberGroup.length <= 3;
//     }
// );
// console.log(filteredNums);
// myFriends.forEach((friend)=>{
//     console.log(friend);
// })

// const fruits =[
//     "orange",
//     "lemon",
//     "calamansi"
// ]

// const upperFruits = fruits.map(fruit =>{
//     return {name: fruit.toUpperCase()};
// });

// console.log(upperFruits);
// console.log(upperFruits[0].name);

// const cars = {
//     "honda":"civic",
//     "honda":"civi2",
//     "toyota":"corolla",
//     "mitsubishi":{
//         "blue":"mirage",
//         "red":"asdf"
//     }
// }

// console.log(Object.keys(cars));

// for (const color in cars.mitsubishi){
//      console.log(cars.mitsubishi[color]);
// }


// console.log(cars);
// cars.honda = 2;
// console.log(cars);

// const num = "1";

// console.log(typeof 1+"");

//object constructor
// pokemons have types types determines attacks 

class Pokemon{
    // type of pokemon ig fire water leaf
    //per type has specific attack
    constructor (name){
        this.name = name;
        this.attackDmg = 10;
        this.health = 100;
        // this.attack = (target) => {
        //     target.health = target.health - this.attackDmg; 
        //     battleLogs.append(`${this.name} attacks ${target.name} for ${this.attackDmg}`);
        //     battleLogs.append(document.createElement("br"));
        //     battleLogs.append(`${target.name} has ${target.health} health\n`);
        //     battleLogs.append(document.createElement("br"));
        // }
    }
   
}
class Pikachu extends Pokemon{
    constructor (){
        this.speed = 40;
        this.accuracy = 50;
    }
}

const Pikachu1 = new Pikachu("Pikachu");
const Bulbasaur = new Pokemon("Bulbasaur");
const Charmander = new Pokemon("Charmander");

const battleLogs = document.querySelector('#battleLogs');
const p1Name = document.querySelector('#p1Name');
const p1CurrentHealth = document.querySelector('#p1CurrentHealth');
const p1healthBar = document.querySelector('.p1HealthBarContainer');
const p1Img = document.querySelector("#p1Img");
const p1Attack = document.querySelector('#p1Attack');


p1Name.innerHTML = Bulbasaur.name;
p1CurrentHealth.innerHTML = Bulbasaur.health;
p1Img.setAttribute("src","./assets/img/bulbasaur.png");

p1Attack.addEventListener("click", (e) =>{
    // e.target.Bulbasaur.attack("Pikachu")
        Bulbasaur.attack(Charmander);
        p2CurrentHealth.innerHTML = Charmander.health;
        p2healthBar.setAttribute("style",`width:${Charmander.health}%`);
        
});

const p2Name = document.querySelector('#p2Name');
const p2CurrentHealth = document.querySelector('#p2CurrentHealth');
const p2healthBar = document.querySelector('.p2HealthBarContainer');
const p2Img = document.querySelector("#p2Img");
const p2Attack = document.querySelector('#p2Attack');

p2Name.innerHTML = Charmander.name;
p2CurrentHealth.innerHTML = Charmander.health;
p2Img.setAttribute("src","./assets/img/charmander.png");
p2Attack.addEventListener("click", (e) =>{
    // e.target.Bulbasaur.attack("Pikachu")
        Charmander.attack(Bulbasaur);
        p1CurrentHealth.innerHTML = Bulbasaur.health;
        p1healthBar.setAttribute("style",`width:${Bulbasaur.health}%`);
});


