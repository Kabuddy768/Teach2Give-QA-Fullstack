"use strict";
// interface infoTypes{
//     name:string[];
//     age:number,
//     areChamps:boolean
// }
// const info:infoTypes={
//     name =["Ben","David"],
//     age = 25,
//     areChamps =  true
// }
const talkToAnimal = (animal) => {
    console.log(animal.name, animal.age, animal.type);
};
// lets make age optional
const talkToAnimal2 = (animal) => {
    console.log(animal.name, animal.age, animal.type);
};
const cow = {
    name: "Cow", age: 25, type: "Mammal"
};
const cow1 = {
    name: "Cow", type: "Mammal"
};
talkToAnimal(cow);
talkToAnimal2(cow1);
const concatName = (user) => {
    return `${user.first} ${user.last}`;
};
const nameObj = {
    first: "Ben",
    last: "Mwangi"
};
console.log(concatName(nameObj));
